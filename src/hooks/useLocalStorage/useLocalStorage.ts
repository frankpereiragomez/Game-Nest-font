const useLocalStorage = () => {
  const setToken = (key: string, token: string) => {
    localStorage.setItem(key, token);
  };

  const getToken = (key: string): string | null => {
    return localStorage.getItem(key);
  };

  const deleteToken = (key: string) => {
    localStorage.removeItem(key);
  };

  return { setToken, getToken, deleteToken };
};

export default useLocalStorage;
