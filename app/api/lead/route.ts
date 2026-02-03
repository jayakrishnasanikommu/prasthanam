import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(
  process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
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
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail =
      process.env.RESEND_TO_EMAIL || "prasthanamdevelopers@gmail.com";

    try {
      const result = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `New Lead Form Submission from ${name}`,
        html: `
          <h2>New Lead Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
          <p><strong>Source:</strong> Lead Capture Modal</p>
        `,
        replyTo: email || undefined,
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

      console.log("Lead email sent successfully:", result.data);
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
      { message: "Lead submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
