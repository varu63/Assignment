import { Request, Response } from "express";
import { processImport } from "../services/import.service";

export const importCsv = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log("=== importCsv called ===");

  try {
    if (!req.file) {
      console.log("No file received");
      return res.status(400).json({
        success: false,
        message: "CSV file is required.",
      });
    }

    console.log("File received:", req.file.originalname);
    console.log("Buffer size:", req.file.buffer.length);

    const result = await processImport(req.file.buffer);

    return res.status(200).json({
      success: true,
      message: "Import completed successfully.",
      ...result,
    });
  } catch (error) {
    console.error("Controller error:", error);

    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};