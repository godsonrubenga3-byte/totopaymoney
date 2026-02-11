import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFinancialInsight = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Give me a very short, one-sentence obscure but useful financial tip related to saving or currency exchange in East Africa or India markets. Keep it witty.",
    });
    return response.text || "Save small, grow big.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Financial wisdom is currently offline. Keep saving!";
  }
};

export const getMarketAnalysis = async (baseCurrency: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Analyze the current market sentiment for ${baseCurrency} briefly (max 30 words).`,
        });
        return response.text || "Market data unavailable.";
    } catch (e) {
        return "Market sentiment unavailable.";
    }
}
