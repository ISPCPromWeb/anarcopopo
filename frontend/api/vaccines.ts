import { API_URL } from "./constants";

const getAll = async () => {
  const response = await fetch(`${API_URL}/vaccines`);
  const result = await response.json();
  return result;
};

const getOne = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/vaccine/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
};

const createOne = async (form: FormData) => {
  form.append("pub_date", new Date().toISOString());
  try {
    const response = await fetch(`${API_URL}/vaccines`, {
      method: "POST",
      body: form,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
};

const updateOne = async (id: number, form: FormData) => {
  form.append("pub_date", new Date().toISOString());
  try {
    const response = await fetch(`${API_URL}/vaccine/${id}`, {
      method: "PUT",
      body: form,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return [];
  }
};

export const vaccinesApi = {
  getAll: getAll,
  getOne: getOne,
  createOne: createOne,
  updateOne: updateOne,
};
