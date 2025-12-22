import "dotenv/config";

const config = {
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL || "raghavdwd@gmail.com",
  EMAIL_CONFIG: {
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT) || 465,
    secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    from: process.env.EMAIL_FROM,
  },
};

export default config;
