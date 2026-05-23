import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateAIItinerary = async (extractedText) => {
  try {
    // SAFETY CHECK
    if (!extractedText || extractedText.trim() === "") {
      return "No booking information found";
    }

    const prompt = `
You are an AI Travel Planner.

Analyze the booking details below.

Extract:
- Destination
- Travel dates
- Travelers
- Transport details

Generate a SHORT travel itinerary.

Return ONLY:

1. Trip Summary
2. 3-Day Itinerary
3. Estimated Budget
4. 3 Important Travel Tips

STRICT RULES:
- Keep response under 350 words
- Use short bullet points
- Maximum 2 bullets per day
- No long explanations
- No huge paragraphs
- No hotel recommendations
- No food recommendations
- No tourist history descriptions
- Clean Markdown only
- Use simple headings
- Keep formatting clean
- Use proper Markdown formatting
- Use headings and bullet points
- Use bold text for important sections

Booking Information:
${extractedText}
`;

    let retries = 3;

    while (retries > 0) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-flash-latest",
          contents: prompt,
        });

        const cleanedText = response.text
          .replace(/```markdown/g, "")
          .replace(/```/g, "")
          .trim();

        return cleanedText;
      } catch (error) {
        // Retry only for temporary server errors
        if (error.status === 503) {
          console.log("Gemini overloaded. Retrying...");

          retries--;

          await new Promise((resolve) => setTimeout(resolve, 3000));
        } else {
          throw error;
        }
      }
    }

    return "Gemini server busy. Please try again.";
  } catch (error) {
    console.log("Gemini Error:", error);

    return "Unable to generate itinerary right now.";
  }
};
