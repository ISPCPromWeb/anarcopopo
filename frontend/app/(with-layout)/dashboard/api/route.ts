import { API_URL } from "@/api/constants";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const res = await fetch(`${API_URL}/logout`, { ...req, method: "POST" });

  const result = await res.json();

  cookies().delete("csrftoken");
  cookies().delete("sessionid");
  cookies().delete("user");

  console.log(result);

  redirect("/");
}

export async function GET(req: NextRequest) {
  console.log(req);
  const session = cookies().get("sessionid");
  console.log(session);
  if (!session) {
    redirect("/login");
  }
}
