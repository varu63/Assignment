export const isValidDate = (
  value: string
): boolean => {
  return !isNaN(new Date(value).getTime());
};

export const formatDate = (
  value: string
): string => {
  const date = new Date(value);

  return date.toISOString();
};