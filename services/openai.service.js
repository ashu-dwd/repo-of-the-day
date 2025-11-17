import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

/**
 * Summarizes a given text using the OpenAI API.
 * @param {string} text - The text to summarize.
 * @param {string} apiKey - The OpenAI API key.
 * @returns {Promise<string>} The summary.
 */

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "7a049df254d7767a1ff8c68b434e3c3e",
  baseURL: "https://api.bytez.com/models/v2/openai/v1",
});

export async function summarizeText(text) {
  const response = await client.chat.completions.create({
    model: "openai/gpt-4.1",
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant.Your task is to summarize github repos",
      },
      { role: "user", content: text },
    ],
    tools: [],
    temperature: 0.7,
  });
  return response.choices[0].message.content;
}
