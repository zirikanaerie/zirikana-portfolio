import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import config from "../config/env.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function getCv(req, res) {
  const resolvedPath = path.resolve(__dirname, "../../", config.cvPath);

  if (!fs.existsSync(resolvedPath)) {
    return res.status(404).json({
      ok: false,
      message: "CV file is currently unavailable.",
    });
  }

  res.download(resolvedPath, "Zirikana-Elie-CV.pdf", (err) => {
    if (err && !res.headersSent) {
      res.status(500).json({ ok: false, message: "Could not download CV." });
    }
  });
}

export default { getCv };
