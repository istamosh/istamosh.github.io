// only use during development, place inside /api/screenshot.tsx

import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url || typeof url !== "string") {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  const filename = url.replace(/[^a-zA-Z0-9]/gi, "_").toLowerCase() + ".png";
  const screenshotPath = path.join(
    process.cwd(),
    "public/screenshots",
    filename
  );

  // Check if the screenshot already exists
  if (fs.existsSync(screenshotPath)) {
    return NextResponse.json({ image: `/screenshots/${filename}` });
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.screenshot({ path: screenshotPath });
    await browser.close();

    return NextResponse.json({ image: `/screenshots/${filename}` });
  } catch (error) {
    console.error("Error taking screenshot:", error);
    return NextResponse.json(
      { error: "Failed to take screenshot" },
      { status: 500 }
    );
  }
};
