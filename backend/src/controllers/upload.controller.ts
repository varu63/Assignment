import { Request, Response } from "express";
import { parseCsv } from "../services/csv.service";

export const uploadCsv = async (
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

    const preview = await parseCsv(req.file.buffer);

    res.status(200).json({
      success: true,
      message: "CSV parsed successfully.",
      totalRows: preview.length,
      preview,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to parse CSV.",
    });
  }
};