export interface ValidationResult {
  valid: any[];
  skipped: any[];
}

export const validateRecords = (
  records: any[]
): ValidationResult => {
  const valid: any[] = [];
  const skipped: any[] = [];

  for (const record of records) {
    const hasEmail = Boolean(record.email);
    const hasPhone = Boolean(
      record.mobile_without_country_code
    );

    if (!hasEmail && !hasPhone) {
      skipped.push(record);
      continue;
    }

    valid.push(record);
  }

  return {
    valid,
    skipped,
  };
};