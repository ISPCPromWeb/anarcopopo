import { API_URL } from "./constants";

const getAll = async () => {
  const response = await fetch(`${API_URL}/pets`);
  const result = await response.json();
  return result;
};

const getOne = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/pet/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
};

export const petsApi = {
  getAll: getAll,
  getOne: getOne,
};
