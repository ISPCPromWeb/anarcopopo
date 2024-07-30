import { cookies } from "next/headers";

export const parsedUser = () => {
  const rawUser = cookies().get("user");
  if (rawUser) {
    return JSON.parse(rawUser.value);
  }
  return {};
};

export const checkIsStaff = (user: any) => {
  if (user.is_staff) {
    return user.is_staff;
  }
  return false;
};

export const user = parsedUser();
export const isStaff = checkIsStaff(user);
export const sessionId = cookies().get("sessionid");
export const token = cookies().get("csrftoken");
