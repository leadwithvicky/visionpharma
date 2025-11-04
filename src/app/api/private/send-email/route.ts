// app/api/job-application/route.ts
import { NextResponse } from 'next/server';
import { EmailService, JobApplication } from '@/backend/services/email.service';

export async function POST(request: Request) {
  try {
    await EmailService.validateConfig();

    const formData = await request.formData();

    // Extract and validate form data
    const fullName = formData.get('fullName')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const phone = formData.get('phone')?.toString().trim();
    const position = formData.get('position')?.toString().trim();
    const gender = formData.get('gender')?.toString().trim();
    const resume = formData.get('resume') as File | null;

    // Validate all required fields
    if (!fullName || !email || !phone || !position || !gender || !resume) {
      return NextResponse.json(
        {
          message: 'Missing required fields',
          fields: {
            fullName: !fullName ? 'Full name is required' : null,
            email: !email ? 'Email is required' : null,
            phone: !phone ? 'Phone is required' : null,
            position: !position ? 'Position is required' : null,
            gender: !gender ? 'Gender is required' : null,
            resume: !resume ? 'Resume is required' : null,
          },
        },
        { status: 400 }
      );
    }

    // Create properly typed application object
    const application: JobApplication = {
      fullName,
      email,
      phone,
      position,
      gender,
      resume,
    };

    await EmailService.sendJobApplication(application);

    return NextResponse.json(
      {
        message: 'Application submitted successfully',
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    const message =
      error instanceof Error ? error.message : 'Failed to process application';
    return NextResponse.json({ message }, { status: 500 });
  }
}
