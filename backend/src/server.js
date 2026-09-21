import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import config from "./config/env.js";
import apiRoutes from "./routes/api.js";
import { generalRateLimiter } from "./middleware/rateLimiters.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// --- Security ---
app.use(
  helmet({
    contentSecurityPolicy: false, // the SPA sets its own via meta/host config
  })
);

const allowedOrigins = [config.clientUrl].filter(Boolean);
app.use(
  cors({
    origin(origin, callback) {
      // Allow non-browser requests (no origin) and configured client URL
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use(express.json({ limit: "50kb" }));
app.use(generalRateLimiter);

// --- API routes ---
app.use("/api", apiRoutes);

// --- Optional: serve the built frontend from this same server ---
// Enables a single-server deployment in addition to the default
// Vercel (frontend) + Render (backend) split.
const clientDist = path.resolve(__dirname, "../../client/dist");
if (fs.existsSync(clientDist)) {
  app.use(express.static(clientDist));

  app.get("*", (req, res, next) => {
    if (req.path.startsWith("/api")) return next();
    res.sendFile(path.join(clientDist, "index.html"));
  });
}

// --- 404 fallback for unmatched API routes ---
app.use("/api", (req, res) => {
  res.status(404).json({ ok: false, message: "Not found." });
});

// --- Central error handler ---
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error("Unhandled error:", err.message);
  res.status(500).json({
    ok: false,
    message: "Internal server error.",
  });
});

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${config.port} [${config.nodeEnv}]`);
  if (!config.isEmailConfigured) {
    // eslint-disable-next-line no-console
    console.warn(
      "SMTP not configured — /api/contact will respond with a graceful fallback."
    );
  }
});

export default app;
