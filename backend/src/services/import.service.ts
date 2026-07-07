import { parseCsv } from "./csv.service";
import { createBatches } from "./batch.service";
import { extractCRMRecords } from "./ai.service";
import { validateRecords } from "./validation.service";

export const processImport = async (
  buffer: Buffer
) => {
  const rows = await parseCsv(buffer);

  const batches = createBatches(rows, 20);

  const extracted: any[] = [];

  for (const batch of batches) {
    const result = await extractCRMRecords(batch);

    extracted.push(...result);
  }

  const { valid, skipped } = validateRecords(extracted);

  return {
    totalImported: valid.length,
    totalSkipped: skipped.length,
    importedRecords: valid,
    skippedRecords: skipped,
  };
};