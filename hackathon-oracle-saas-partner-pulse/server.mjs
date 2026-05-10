import { createServer } from "node:http";
import { dirname, extname, join, normalize } from "node:path";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT || 4174);
const root = dirname(fileURLToPath(import.meta.url));
const logoPath = "C:\\Users\\Ratxel\\Downloads\\ChatGPT Image May 10, 2026, 05_00_18 PM.png";

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
};

function safePath(url) {
  const pathname = decodeURIComponent(new URL(url, `http://localhost:${port}`).pathname);
  const relative = pathname === "/" ? "index.html" : pathname.slice(1);
  const file = normalize(join(root, relative));
  return file.startsWith(root) ? file : null;
}

createServer(async (req, res) => {
  if ((req.url || "").startsWith("/assets/oracle-partner-pulse-logo.png")) {
    try {
      const logo = await readFile(logoPath);
      res.writeHead(200, { "Content-Type": "image/png", "Cache-Control": "no-store" });
      res.end(logo);
    } catch {
      res.writeHead(404);
      res.end("Logo not found");
    }
    return;
  }

  const file = safePath(req.url || "/");
  if (!file) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const data = await readFile(file);
    res.writeHead(200, {
      "Content-Type": mime[extname(file)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  } catch {
    const fallback = await readFile(join(root, "index.html"));
    res.writeHead(200, { "Content-Type": mime[".html"], "Cache-Control": "no-store" });
    res.end(fallback);
  }
}).listen(port, () => {
  console.log(`Oracle SaaS Partner Pulse running at http://localhost:${port}`);
});
