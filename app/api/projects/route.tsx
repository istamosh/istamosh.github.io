import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const projectDir = path.join(process.cwd(), "public/projects/");
  const inputUrls: string[] = [];

  fs.readdirSync(projectDir).forEach((project) => {
    const projectPath = path.join(projectDir, project);
    if (fs.statSync(projectPath).isDirectory()) {
      const indexPath = path.join(projectPath, "index.html");
      if (fs.existsSync(indexPath)) {
        inputUrls.push(`/projects/${project}/index.html`);
      }
    }
  });

  return NextResponse.json(inputUrls);
}
