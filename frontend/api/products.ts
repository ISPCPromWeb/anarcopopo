import { API_URL } from "./constants";

const getAll = async () => {
  const response = await fetch(`${API_URL}/products`);
  const result = await response.json();
  return result;
};

export const productsApi = {
  getAll: getAll(),
};
