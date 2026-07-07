export const AI_MODEL = "gemini-2.5-flash";

export const BATCH_SIZE = 20;

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const ALLOWED_MIME_TYPES = [
  "text/csv",
  "application/vnd.ms-excel",
];

export const ALLOWED_STATUS = [
  "GOOD_LEAD_FOLLOW_UP",
  "DID_NOT_CONNECT",
  "BAD_LEAD",
  "SALE_DONE",
];

export const ALLOWED_DATA_SOURCE = [
  "leads_on_demand",
  "meridian_tower",
  "eden_park",
  "varah_swamy",
  "sarjapur_plots",
];