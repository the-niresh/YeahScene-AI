import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    if (!data.name || !data.email || !data.requirements) {
      return NextResponse.json({ 
        message: 'Missing required fields: name, email, and requirements' 
      }, { status: 400 });
    }
    
    // Create the email content
    const emailContent = `
      New Contact Form Submission:
      
      Name: ${data.name}
      Email: ${data.email}
      Mobile: ${data.mobile || 'Not provided'}
      Company: ${data.company || 'Not provided'}
      Budget Range: ${data.budget || 'Not provided'}
      
      Requirements:
      ${data.requirements}
    `;

    // Send email using Resend
    await resend.emails.send({
      from: 'YeahScene AI <onboarding@resend.dev>',
      to: ['nireshine@gmail.com'],
      subject: `New Contact Form Submission from ${data.name}`,
      text: emailContent,
    });

    // Return success response
    return NextResponse.json({ 
      message: 'Form submitted successfully' 
    }, { status: 200 });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json({ 
      message: 'Error processing form submission' 
    }, { status: 500 });
  }
}
