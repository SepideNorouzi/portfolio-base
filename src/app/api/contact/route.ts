import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/send-contact-email";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required.").max(120),
  email: z.string().trim().email("Enter a valid email address.").max(200),
  message: z.string().trim().min(1, "Message is required.").max(5000),
});

const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const recent = (hits.get(ip) ?? []).filter((timestamp) => now - timestamp < windowMs);
  if (recent.length >= 5) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a few minutes and try again." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldIssue = parsed.error.issues.find((issue) => issue.path.length > 0);
    return NextResponse.json(
      { error: fieldIssue?.message ?? "Please check the form and try again." },
      { status: 400 },
    );
  }

  try {
    const origin = request.headers.get("origin") || new URL(request.url).origin;
    await sendContactEmail(parsed.data, origin);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    const detail = error instanceof Error ? error.message : "";
    const safe =
      detail && detail.length < 180 && !/auth|password|smtp/i.test(detail)
        ? detail
        : "Could not send your message. Please try again in a moment.";
    return NextResponse.json({ error: safe }, { status: 502 });
  }
}
