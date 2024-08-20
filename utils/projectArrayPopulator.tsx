import fs from "fs";
import path from "path";

export function projectArrayPopulator() {
  const projectsDir = path.join(process.cwd(), "public", "projects");
  const projectFolders = fs.readdirSync(projectsDir);

  const projectPaths = projectFolders
    .map((folder) => {
      const indexPath = path.join("projects", folder, "index.html");
      const fullPath = path.join(projectsDir, folder, "index.html");
      console.log("Checking:", fullPath);

      if (fs.existsSync(fullPath)) {
        return indexPath;
      }
      return null;
    })
    .filter(Boolean);

  return projectPaths;
}
