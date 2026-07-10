import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, college, courseSlug } = body;

    const getFormattedTimestamp = () => {
      const now = new Date();
      const pad = (n: number) => n.toString().padStart(2, "0");
      return `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
    };

    // Basic server-side validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      // For development/testing before the user sets up the Apps Script
      console.log("Mocking Google Sheets Submission (GOOGLE_SCRIPT_URL not set):", {
        fullName,
        email,
        phone,
        college,
        courseSlug,
        timestamp: getFormattedTimestamp()
      });
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return NextResponse.json({ success: true, message: "Mock submission successful" });
    }

    // Forward the data to the Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        college: college || "N/A",
        courseSlug: courseSlug || "Unknown",
        timestamp: getFormattedTimestamp()
      }),
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script returned ${response.status}`);
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Error submitting brochure request:", error);
    return NextResponse.json(
      { error: "Failed to submit request", details: error.message || String(error) },
      { status: 500 }
    );
  }
}
