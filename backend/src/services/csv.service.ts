import Papa from "papaparse";

export const parseCsv = async (buffer: Buffer): Promise<any[]> => {
  const csv = buffer.toString("utf-8");

  return new Promise((resolve, reject) => {
    Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,

      complete: (results) => {
        resolve(results.data as any[]);
      },

      error: (error) => {
        reject(error);
      },
    });
  });
};