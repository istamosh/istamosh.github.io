// run this code with node command to add base tag to public projects

const fs = require("fs");
const path = require("path");

// Path to your projects directory
const projectsDir = path.join(__dirname, "public/projects");

fs.readdirSync(projectsDir).forEach((project) => {
  const indexPath = path.join(projectsDir, project, "index.html");

  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, "utf-8");

    // Check if <base> tag is already present
    const baseTagRegex = /<base\s[^>]*href="[^"]*"[^>]*>/i;
    const baseTagExists = baseTagRegex.test(content);

    if (!baseTagExists) {
      // Insert the <base> tag inside the <head> section
      const headTagIndex = content.indexOf("<head>");
      if (headTagIndex !== -1) {
        const baseHref = `/projects/${project}/`;
        const baseTag = `\n\t\t<base href="${baseHref}">`;

        content =
          content.slice(0, headTagIndex + 6) +
          baseTag +
          content.slice(headTagIndex + 6);

        fs.writeFileSync(indexPath, content, "utf-8");
        console.log(`Added <base> tag to ${indexPath}`);
      }
    } else {
      console.log(`<base> tag already exists in ${indexPath}`);
    }
  }
});
