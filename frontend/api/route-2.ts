import { API_URL } from "@/api/constants";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  form.append("pub_date", new Date().toISOString());

  const file = form.get("img") as unknown as File;

  if (!file) {
    return NextResponse.json({ error: "File does not exists", status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(" ", "_");

  await writeFile(
    path.join(process.cwd(), "public/products/" + filename),
    buffer
  );

  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: form,
    credentials: "include",
  });

  redirect("/dashboard/products");
}
