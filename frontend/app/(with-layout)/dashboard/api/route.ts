import { API_URL } from "@/api/constants";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const res = await fetch(`${API_URL}/logout`, { ...req, method: "POST" });

  cookies().delete("userToken");
  cookies().delete("userSession");
  cookies().delete("user");

  redirect("/");
}
