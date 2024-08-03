import { UserForm } from "@/components/UserForm";
import styles from "./page.module.css";
import { sessionId } from "@/utils/auth";
import { redirect } from "next/navigation";

const Dashboard = () => {
  if (!sessionId) {
    redirect("/login");
    return null;
  }

  return <UserForm />;
};

export default Dashboard;
