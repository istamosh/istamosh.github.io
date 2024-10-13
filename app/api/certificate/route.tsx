import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const GET = async () => {
  const certificateDir = path.join(process.cwd(), "public", "certificates");

  const files = fs.readdirSync(certificateDir);
  const certificatePaths = files.map((file) => `/certificates/${file}`);

  return NextResponse.json(certificatePaths);
};
