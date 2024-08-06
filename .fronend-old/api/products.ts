import { API_URL } from "./constants";

const getAll = async () => {
  const response = await fetch(`${API_URL}/products`);
  const result = await response.json();
  return result;
};

const getOne = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/product/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
};

export const productsApi = {
  getAll: getAll,
  getOne: getOne,
};
