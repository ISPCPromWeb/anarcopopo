import { API_URL } from "./constants";

const getAll = async () => {
  const response = await fetch(`${API_URL}/clients`);
  const result = await response.json();
  return result;
};

const getOne = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/client/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
};

export const userApi = {
  getAll: getAll,
  getOne: getOne,
};
