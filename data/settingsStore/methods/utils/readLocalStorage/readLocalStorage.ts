export const readLocalStorage = <T>(value: string, defaultValue: T): T => {
  const result = localStorage.getItem(value);
  return result ? JSON.parse(result) : defaultValue;
};
