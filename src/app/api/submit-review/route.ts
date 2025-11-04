import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, rating, comment, company } = await request.json();

    // Validate input
    if (!name || !email || !rating || !comment || !company) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Here, implement submission to the external website
    // For example, for Trustpilot, if they have an API
    // Since they don't have public user submission API, we can log it or send to email

    // For now, simulate submission
    console.log('Review submitted:', { name, email, rating, comment, company });

    // You can add logic to submit to specific APIs based on company
    // For Trustpilot, perhaps use a third-party service or email

    // For demonstration, return success
    return NextResponse.json({ message: 'Review submitted successfully' });
  } catch (error) {
    console.error('Error submitting review:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
