import dotenv from "dotenv";

dotenv.config();

export const configuration = {
  SMTP_HOST: process.env.SMTP_HOST || "",
  SMTP_PORT: Number(process.env.SMTP_PORT) || 587,
  SMTP_USER: process.env.SMTP_USER || "",
  SMTP_PASSWORD: process.env.SMTP_PASSWORD || "",
  RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL || "",
};