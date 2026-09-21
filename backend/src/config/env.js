import dotenv from "dotenv";

dotenv.config();

const isEmailConfigured = Boolean(
  process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.CONTACT_EMAIL
);

export const config = {
  port: parseInt(process.env.PORT || "4000", 10),
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  nodeEnv: process.env.NODE_ENV || "development",

  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  contactEmail: process.env.CONTACT_EMAIL,
  isEmailConfigured,

  cvPath: process.env.CV_PATH || "../client/public/cv/Zirikana-Elie-CV.pdf",
};

export default config;
