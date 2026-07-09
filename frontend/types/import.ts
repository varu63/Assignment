export interface CSVPreviewData {
  headers: string[];
  rows: Record<string, string>[];
}

export interface CRMRecord {
  created_at?: string;
  name?: string;
  email?: string;
  country_code?: string;
  mobile_without_country_code?: string;
  company?: string;
  city?: string;
  state?: string;
  country?: string;
  lead_owner?: string;
  crm_status?: 'GOOD_LEAD_FOLLOW_UP' | 'DID_NOT_CONNECT' | 'BAD_LEAD' | 'SALE_DONE';
  crm_note?: string;
  data_source?: 'leads_on_demand' | 'meridian_tower' | 'eden_park' | 'varah_swamy' | 'sarjapur_plots' | '';
  possession_time?: string;
  description?: string;
}

export interface SkippedRecord {
  rowNumber: number;
  reason: string;
  rawData: Record<string, string>;
}

export interface ImportResponse {
  success: boolean;
  message: string;
  totalImported: number;
  totalSkipped: number;
  importedRecords: CRMRecord[];
  skippedRecords: SkippedRecord[];
}

export type ImportWorkflowStep = 'IDLE' | 'PREVIEW' | 'PROCESSING' | 'RESULT';