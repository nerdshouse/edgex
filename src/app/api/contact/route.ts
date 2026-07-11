import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, topic, message } = body;

    const getFormattedTimestamp = () => {
      const now = new Date();
      const pad = (n: number) => n.toString().padStart(2, "0");
      return `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
    };

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // You can use the same script URL or a different one for the contact form
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL_CONTACT || process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      // Mocking submission if no URL is set
      console.log("Mocking Contact Form Submission:", {
        name,
        email,
        topic,
        message,
        timestamp: getFormattedTimestamp()
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, message: "Mock submission successful" });
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Map to what the contact script will expect
        name,
        email,
        topic: topic || "Other",
        message,
        timestamp: getFormattedTimestamp()
      }),
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script returned ${response.status}`);
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Error submitting contact request:", error);
    return NextResponse.json(
      { error: "Failed to send message", details: error.message || String(error) },
      { status: 500 }
    );
  }
}
