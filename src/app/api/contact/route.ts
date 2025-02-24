import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend('re_E3eRUr94_6AGKFx324UyQAZwxTCwTpJEe')

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'paeltuyo@gmail.com',
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    })

    console.log('Email sent successfully:', result)
    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 