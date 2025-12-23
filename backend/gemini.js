import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

export async function callGemini(promt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: promt,
  });
  return response.text;
}
