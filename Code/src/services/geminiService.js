const { GoogleGenAI } = require("@google/genai");

const callGemini = async (prompt) => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("Gemini API key is not configured");
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: apiKey,
    });
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
    });

    const text = response.text;

    if (!text) {
      throw new Error("Invalid Gemini response");
    }

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    throw error;
  }
};

module.exports = {
  callGemini,
};