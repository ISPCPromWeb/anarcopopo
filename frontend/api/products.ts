import { redirect } from "next/navigation";
import { API_URL } from "./constants";
import path from "path";
import fs from "fs";

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

const createOne = async (form: FormData) => {
  /* const form = await req.formData(); */
  form.append("pub_date", new Date().toISOString());

  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: form,
  });

  const result = await res.json();

  return result;
};

export const productsApi = {
  getAll: getAll,
  getOne: getOne,
  createOne: createOne,
};
