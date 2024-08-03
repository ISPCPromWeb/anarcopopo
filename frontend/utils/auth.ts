import { userApi } from "@/api";
import { cookies } from "next/headers";

export const parsedUser = () => {
  const rawUser = cookies().get("user");
  if (rawUser) {
    return JSON.parse(rawUser.value);
  }
  return {};
};

export const getCurrentUser = async () => {
  let currentUser = null;
  if (user.id) {
    [currentUser] = await userApi.getOne(user.id);
  }
  return currentUser;
};

export const user = parsedUser();
export const sessionId = cookies().get("userSession");
export const token = cookies().get("userToken");
