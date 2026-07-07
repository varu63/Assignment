import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || "5000",

  NODE_ENV: process.env.NODE_ENV || "development",

  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",

  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000",
};

if (!env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing in .env");
}