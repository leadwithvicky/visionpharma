import { MetadataRoute } from 'next';

const baseUrl = 'https://visiontech.world';

const staticRoutesData = [
  '/',
  '/about',
  '/careers',
  '/contact',
  '/login',
  '/signup',
  '/program',
  '/services',
  '/success',
  '/privacy-policy',
  '/refund-policy',
  '/terms-and-conditions',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes = staticRoutesData.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  // Dynamic routes - Example for courses
  // Replace with your actual data fetching logic
  // const courses = await fetch(`${baseUrl}/api/course`)
  //   .then((res) => res.json())
  //   .catch(() => []);

  // const dynamicCourses = courses.map(
  //   (course: { slug: string; updatedAt: string }) => ({
  //     url: `/${course.slug}`,
  //     lastModified: new Date(course.updatedAt),
  //     changeFrequency: 'weekly' as const,
  //     priority: 0.9,
  //   })
  // );

  return [...staticRoutes];
}
