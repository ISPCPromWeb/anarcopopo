import { createPostponedAbortSignal } from "next/dist/server/app-render/dynamic-rendering";
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

const createOne = async (form: FormData) => {
  /* const form = await req.formData(); */
  form.append("pub_date", new Date().toISOString());

  const res = await fetch(`${API_URL}/pets`, {
    method: "POST",
    body: form,
  });

  const result = await res.json();
  return result;
};

export const petsApi = {
  getAll: getAll,
  getOne: getOne,
  createOne: createOne,
};
