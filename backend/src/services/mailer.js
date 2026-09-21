import nodemailer from "nodemailer";
import config from "../config/env.js";

let transporter = null;

function getTransporter() {
  if (!config.isEmailConfigured) return null;
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.port === 465,
    auth: {
      user: config.smtp.user,
      pass: config.smtp.pass,
    },
  });

  return transporter;
}

/**
 * Sends the contact-form submission as an email.
 * Returns { sent: true } on success.
 * Throws if email is configured but sending fails.
 * Returns { sent: false, reason: "not_configured" } when SMTP is unset,
 * so the caller can respond gracefully instead of crashing.
 */
export async function sendContactEmail({ name, email, phone, message }) {
  const mailer = getTransporter();

  if (!mailer) {
    return { sent: false, reason: "not_configured" };
  }

  await mailer.sendMail({
    from: `"Portfolio Contact Form" <${config.smtp.user}>`,
    to: config.contactEmail,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  return { sent: true };
}

export default { sendContactEmail };
