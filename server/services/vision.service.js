import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const extractTextFromImage = async (imageBuffer, mimeType) => {
  try {
    const base64Image = imageBuffer.toString("base64");

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",

      contents: [
        {
          role: "user",

          parts: [
            {
              inlineData: {
                mimeType,
                data: base64Image,
              },
            },

            {
              text: `
Extract all travel information from this image.

Extract:
- passenger names
- flight details
- dates
- hotels
- destinations
- booking ids
- transport details

Return clean readable text.
                `,
            },
          ],
        },
      ],
    });

    return response.text || "No text extracted";
  } catch (error) {
    console.error("Vision Extraction Error:", error.message);

    return "Unable to extract image text";
  }
};
