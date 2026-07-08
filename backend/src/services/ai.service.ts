import { gemini } from "../config/gemini";
import { buildExtractionPrompt } from "../prompts/extraction.prompt";
import { SYSTEM_PROMPT } from "../prompts/system.prompt";
export const extractCRMRecords = async (batch: any[]) => {
  console.log("Before Gemini");

  const response = await gemini.models.generateContent({
    model: "gemini-2.5-flash",
    contents: buildExtractionPrompt(batch),
    config: {
      systemInstruction: SYSTEM_PROMPT,
    },
  });

  console.log("After Gemini");

  return batch;
};