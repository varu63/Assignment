const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (
  email?: string
): boolean => {
  if (!email) return false;

  return EMAIL_REGEX.test(email.trim());
};

export const extractEmails = (
  text: string
): string[] => {
  if (!text) return [];

  return text.match(
    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
  ) || [];
};