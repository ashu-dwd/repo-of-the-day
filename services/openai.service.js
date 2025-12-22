import OpenAI from "openai";
import dotenv from "dotenv";
import config from "../config/index.js";
dotenv.config();

/**
 * Summarizes a given text using the OpenAI API.
 * @param {string} text - The text to summarize.
 * @param {string} apiKey - The OpenAI API key.
 * @returns {Promise<string>} The summary.
 */

const client = new OpenAI({
  apiKey: config.GEMINI_API_KEY || "7a049df254d7767a1ff8c68b434e3c3e",
  baseURL: "https://generativelanguage.googleapis.com/v1beta/",
});
// console.log("OpenAI API Key:", process.env.OPENAI_API_KEY);

const groundingTool = {
  googleSearch: {},
};
export async function summarizeText(text) {
  console.log("Summarizing text...", text);
  const response = await client.chat.completions.create({
    model: "gemini-2.5-flash",
    reasoning_effort: "low",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant.Your task is to summarize github repos. Dont include like here is summmary time phrases. Keep Summary natural. Use google search to find more information about the repo.",
      },
      { role: "user", content: text },
    ],
    temperature: 0.7,
    tools: [groundingTool],
  });
  return response.choices[0].message.content;
}
