import { API_URL } from "@/api/constants";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  form.append("pub_date", new Date().toISOString());

  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    body: form,
    credentials: "include",
  });

  const result = await res.json();
  const rawCookies = res.headers.get("set-cookie");

  if (rawCookies) {
    const cookie = rawCookies.split(",");

    cookie.forEach((segment) => {
      const segments = segment.split(";");
      const [keyValue] = segments;
      const [name, value] = keyValue.split("=").map((str) => str.trim());
      if (name === "csrftoken" || name === "sessionid") {
        cookies().set(name, value);
      }
    });
  }

  cookies().set("user", JSON.stringify(result));

  redirect("/");
}
