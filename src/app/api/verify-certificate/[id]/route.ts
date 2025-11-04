import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const backendUrl = `${process.env.NEXT_PUBLIC_CERTIFICATE_API}/verify-certificate/${id}`;

  try {
    const response = await fetch(backendUrl);
    if (!response.ok) {
      return NextResponse.json(
        { error: `Backend error: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.startsWith('image/')) {
      const arrayBuffer = await response.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString('base64');
      return NextResponse.json({ imageBase64: base64, contentType });
    } else {
      const data = await response.json();
      return NextResponse.json(data);
    }
  } catch (error) {
    console.error('Proxy fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch certificate from backend' },
      { status: 500 }
    );
  }
}
