export const extractCRMRecords = async (
  batch: any[]
): Promise<any[]> => {
  // TODO:
  // Call Gemini/OpenAI here
const response = await gemini.models.generateContent({
  model: "gemini-2.5-flash",
  contents: buildExtractionPrompt(batch),
  config: {
    systemInstruction: SYSTEM_PROMPT,
  },
});
  return batch;
};