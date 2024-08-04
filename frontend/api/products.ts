import { redirect } from "next/navigation";
import { API_URL } from "./constants";
import path from "path";

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

const updateOne = async (id: number) => {
  /* const form = await req.formData(); */
  form.append("pub_date", new Date().toISOString());

  const file = form.get("img") as unknown as File;

  if (!file) {
    return { error: "File does not exists" };
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", "_");

  /* await writeFile(
    path.join(process.cwd(), "public/products/" + filename),
    buffer
  ); */

  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: form,
    credentials: "include",
  });

  redirect("/dashboard/products");
};

export const productsApi = {
  getAll: getAll,
  getOne: getOne,
  updateOne: updateOne,
};
