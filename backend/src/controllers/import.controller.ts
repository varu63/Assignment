import { Request, Response } from "express";
import { processImport } from "../services/import.service";

export const importCsv = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: "CSV file is required.",
      });
      return;
    }

    const result = await processImport(req.file.buffer);

    res.status(200).json({
      success: true,
      message: "Import completed successfully.",
      ...result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to import CSV.",
    });
  }
};