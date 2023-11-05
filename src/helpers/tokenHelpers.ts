const setToken = (name: string, value: string): void => {
  localStorage.setItem(name, value);
};

const getToken = (name: string): string | null => {
  return localStorage.getItem(name);
};

const deleteToken = (name: string): void => {
  localStorage.removeItem(name);
};
export const tokenHelpers = { setToken, getToken, deleteToken };
