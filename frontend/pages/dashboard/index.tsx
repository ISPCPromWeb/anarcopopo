import { UserForm } from "@/components/UserForm";
import styles from "./index.module.css";
import { WithAuth } from "@/components/WithAuth";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <UserForm />
    </DashboardLayout>
  );
};

export default Dashboard;
