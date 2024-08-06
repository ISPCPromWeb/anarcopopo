/* import { cookies } from "next/headers";
import { redirect } from "next/navigation"; */

export const WithAuth = (props: any) => {
  const { children } = props;

  /* const sessionId = cookies().get("userSession"); */

  /* if (!sessionId) {
    redirect("/login");
    return null;
  } */

  return <>{children}</>;
};
