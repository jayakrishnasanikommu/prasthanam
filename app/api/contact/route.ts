import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(
  process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (
      !process.env.RESEND_API_KEY &&
      !process.env.NEXT_PUBLIC_RESEND_API_KEY
    ) {
      console.error("Resend API key is not configured");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Send email using Resend
    // Use verified domain email for production
    // Set RESEND_FROM_EMAIL in .env (e.g., "contact@yourdomain.com" or "info@yourdomain.com")
    // Set RESEND_TO_EMAIL in .env for the recipient email
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail =
      process.env.RESEND_TO_EMAIL || "prasthanamdevelopers@gmail.com";

    try {
      const result = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
        replyTo: email, // This allows replying directly to the form submitter
      });

      if (result.error) {
        console.error("Resend error:", JSON.stringify(result.error, null, 2));
        return NextResponse.json(
          {
            error: "Failed to send email",
            details: result.error,
          },
          { status: 500 }
        );
      }

      console.log("Email sent successfully:", result.data);
    } catch (resendError: any) {
      console.error("Resend exception:", resendError);
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: resendError?.message || String(resendError),
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
