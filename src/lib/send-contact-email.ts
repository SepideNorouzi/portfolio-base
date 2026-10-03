import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/data";

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendWithNodemailer(input: ContactMessage, user: string, pass: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const subject = `Portfolio inquiry from ${input.name.replace(/[\r\n]+/g, " ")}`;
  const text = `${input.message}\n\n— ${input.name}\n${input.email}`;
  const html = `<p>${escapeHtml(input.message).replace(/\n/g, "<br />")}</p>
<p>— ${escapeHtml(input.name)}<br />
<a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a></p>`;

  await transporter.sendMail({
    from: `"${siteConfig.name} Portfolio" <${user}>`,
    to: siteConfig.email,
    replyTo: input.email,
    subject,
    text,
    html,
  });
}

async function sendWithFormSubmit(input: ContactMessage, origin: string) {
  const subject = `Portfolio inquiry from ${input.name.replace(/[\r\n]+/g, " ")}`;
  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(siteConfig.email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin,
        Referer: `${origin}/`,
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        message: input.message,
        _replyto: input.email,
        _subject: subject,
        _template: "table",
        _captcha: "false",
      }),
    },
  );

  const payload = (await response.json().catch(() => null)) as {
    success?: string | boolean;
    message?: string;
  } | null;

  const delivered = payload?.success === true || payload?.success === "true";
  if (!response.ok || !delivered) {
    const detail = payload?.message ?? "";
    if (/activation/i.test(detail)) {
      throw new Error(
        `A one-time activation email was sent to ${siteConfig.email}. Open it, activate the form, then send your message again.`,
      );
    }
    throw new Error("The mail service could not deliver this message.");
  }
}

/** Sends the contact form to siteConfig.email. Gmail SMTP via Nodemailer when configured, otherwise FormSubmit. */
export async function sendContactEmail(input: ContactMessage, origin: string) {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (user && pass) {
    await sendWithNodemailer(input, user, pass);
    return;
  }

  await sendWithFormSubmit(input, origin);
}
