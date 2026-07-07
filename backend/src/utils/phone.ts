export const cleanPhone = (
  phone?: string
): string => {
  if (!phone) return "";

  return phone.replace(/\D/g, "");
};

export const extractCountryCode = (
  phone: string
): string => {
  if (phone.startsWith("91")) return "+91";

  if (phone.startsWith("1")) return "+1";

  return "";
};

export const extractMobile = (
  phone: string
): string => {
  const digits = cleanPhone(phone);

  return digits.slice(-10);
};