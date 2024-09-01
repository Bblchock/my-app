export const saveLocalStorage = (name: string, value: unknown): void => {
  localStorage.setItem(name, JSON.stringify(value));
};
