import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { TokenService } from './backend/services/token.service';
import { AUTH_ROUTES as AUTH_ROUTESLC } from './routes-endpoint';

// In-memory cache for user data
// WARNING: This cache is NOT effective in serverless/edge environments due to statelessness and instance ephemerality.
// Data is only cached for the lifetime of a single middleware instance.
const userCache = new Map<string, { data: any; expiry: number }>();
const CACHE_TTL_MS = 10 * 60 * 1000; // Cache for 10 minutes

// Path constants
const AUTH_ROUTES = ['/login', '/signup'];
const PROTECTED_ROUTES = ['/dashboard', '/api/private'];
const ADMIN_ROUTES = ['/dashboard/admin', '/api/private/admin'];

// Helper functions
const redirect = (url: string, req: NextRequest) =>
  NextResponse.redirect(new URL(url, req.url));

const unauthorized = () =>
  NextResponse.json({ error: 'Not Authorized' }, { status: 401 });

async function fetchUser(req: NextRequest, userId: string) {
  console.log(`Fetching user data for userId: ${userId}`); // Log to see when API is called
  const response = await fetch(
    new URL(`${AUTH_ROUTESLC.authMe}?id=${userId}`, req.url),
    {
      headers: { 'x-internal-auth': 'vision-tech-internal-user' },
    }
  );
  // Assuming the API returns a JSON response on success and handles 401 internally or returns non-JSON on error
  if (!response.ok) {
    console.error(
      `Failed to fetch user data for userId: ${userId}, status: ${response.status}`
    );
    // Return null or throw an error if the API indicates failure (e.g., 401)
    // For this example, we'll assume non-ok response means user fetch failed
    return null;
  }
  return response.json();
}

export async function middleware(req: NextRequest) {
  /**
   * TODO: Remove this after testing
   * Currently bypassing all authentication checks
   */
  // const authBypass = true;
  // if (authBypass) {
  //   return NextResponse.next();
  // }

  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token')?.value;

  let isAuthenticated = false;
  let role = 'student';
  let hasActiveEnrollment = false;
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));
  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );
  const isAdminRoute = ADMIN_ROUTES.some((route) => pathname.startsWith(route));

  // Token validation
  if (token) {
    const tokenUser = await TokenService.verifyToken(token);
    if (!tokenUser) {
      console.error('Invalid token');
      // Delete invalid token and redirect to login
      const response = redirect('/login', req);
      response.cookies.delete({ name: 'token', path: '/' });
      return response;
    }

    // Fetch user only for protected routes
    if (isProtectedRoute) {
      const userId = tokenUser.id; // Get user ID from verified token

      // Check cache first
      const cachedUser = userCache.get(userId);
      const now = Date.now();

      if (cachedUser && now < cachedUser.expiry) {
        console.log(`Using cached user data for userId: ${userId}`);
        // Use cached data
        isAuthenticated = true; // Assuming cached data implies authentication
        role = cachedUser.data.role; // Use role from cache
        hasActiveEnrollment = cachedUser.data.hasActiveEnrollment; // Use enrollment from cache
      } else {
        // Cache miss or expired, fetch from API
        const dbUser = await fetchUser(req, userId);

        if (!dbUser) {
          console.log('User fetch failed or API returned non-ok response');
          // Delete token if user fetch fails and redirect to login
          const response = redirect('/login', req);
          response.cookies.delete({ name: 'token', path: '/' });
          return response;
        }

        // Cache the fetched user data
        userCache.set(userId, { data: dbUser, expiry: now + CACHE_TTL_MS });

        isAuthenticated = true;
        role = dbUser.role;
        hasActiveEnrollment = dbUser.hasActiveEnrollment;
      }

      // Bypass checks for devta role
      if (role === 'devta') return NextResponse.next();
    }
  }

  // Handle unauthenticated access
  if (!isAuthenticated) {
    if (pathname.startsWith('/dashboard')) return redirect('/login', req);
    if (pathname.startsWith('/api/private')) return unauthorized();
  }

  // Redirect authenticated users from auth routes
  if (isAuthenticated && isAuthRoute) return redirect('/', req);

  if (isAuthenticated && isProtectedRoute && !hasActiveEnrollment) {
    return redirect('/', req);
  }

  // Admin route protection
  if (isAuthenticated && isAdminRoute && role !== 'admin') {
    return redirect('/dashboard', req);
  }

  return NextResponse.next();
}

export const config = {
  runtime: 'nodejs',
};
