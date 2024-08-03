import { API_URL } from "@/api/constants";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  if (cookies().get("user")) {
    cookies().delete("user");
  }

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
    let cookiesSet = false;

    cookie.forEach((segment) => {
      const segments = segment.split(";");
      const [keyValue] = segments;
      const [name, value] = keyValue.split("=").map((str) => str.trim());
      if (name === "csrftoken" || name === "sessionid") {
        cookies().set(name, value);
        cookiesSet = true;
      }
    });

    if (cookiesSet) {
      cookies().set("user", JSON.stringify(result));
      redirect("/dashboard");
    } else {
      console.error("Failed to set cookies");
      redirect("/login");
    }
  } else {
    console.error("No cookies received from the server");
    redirect("/login");
  }
}
