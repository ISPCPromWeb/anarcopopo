import { UserForm } from "@/components/UserForm";
import styles from "./index.module.css";
import { WithAuth } from "@/components/WithAuth";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LEVELS } from "@/constants";

const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    let user;
    if (typeof window !== "undefined") {
      user = JSON.parse(localStorage.getItem("user") || "{}");
    }
    if (!user) {
      router.replace(`/`);
    }
  }, []);

  return (
    <DashboardLayout>
      <UserForm />
    </DashboardLayout>
  );
};

export default Dashboard;
