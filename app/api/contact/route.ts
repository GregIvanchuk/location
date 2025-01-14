import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { configuration } from "@/config/config";

dotenv.config();

const emailTransporter = nodemailer.createTransport({
  host: configuration.SMTP_HOST,
  port: configuration.SMTP_PORT,
  secure: configuration.SMTP_PORT === 465,
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: configuration.SMTP_USER,
    pass: configuration.SMTP_PASSWORD,
  },
});

export async function POST(req: Request): Promise<Response> {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields (name, email, message) are required" },
        { status: 400 }
      );
    }

    if (!configuration.RECIPIENT_EMAIL) {
      return NextResponse.json(
        { message: "Recipient email is not configured in environment variables" },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: configuration.SMTP_USER,
      to: configuration.RECIPIENT_EMAIL,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await emailTransporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error sending email:", error);

 
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: "Invalid JSON format in the request body" },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      if ("code" in error && (error as NodeJS.ErrnoException).code === "ECONNECTION") {
        return NextResponse.json(
          { message: "Failed to connect to SMTP server", error: error.message },
          { status: 502 }
        );
      }

      if ("responseCode" in error && (error as { responseCode?: number }).responseCode === 550) {
        return NextResponse.json(
          { message: "Mailbox unavailable", error: error.message },
          { status: 550 }
        );
      }
    }

    return NextResponse.json(
      {
        message: "Unexpected error occurred",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
