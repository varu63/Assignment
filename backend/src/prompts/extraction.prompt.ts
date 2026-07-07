export const buildExtractionPrompt = (
  records: unknown[]
) => {
  return `
Convert the following CSV records into GrowEasy CRM format.

CSV Records

${JSON.stringify(records, null, 2)}

Return ONLY JSON.

Example:

{
  "records":[
    {
      "created_at":"2026-05-13T10:00:00Z",
      "name":"John Doe",
      "email":"john@gmail.com",
      "country_code":"+91",
      "mobile_without_country_code":"9876543210",
      "company":"GrowEasy",
      "city":"Mumbai",
      "state":"Maharashtra",
      "country":"India",
      "lead_owner":"",
      "crm_status":"GOOD_LEAD_FOLLOW_UP",
      "crm_note":"",
      "data_source":"",
      "possession_time":"",
      "description":""
    }
  ]
}
`;
};