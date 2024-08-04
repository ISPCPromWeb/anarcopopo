import { UserForm } from "@/components/UserForm";
import styles from "./index.module.css";
import { WithAuth } from "@/components/WithAuth";

const Dashboard = () => {
  return (
    <WithAuth>
      <UserForm />
    </WithAuth>
  );
};

export default Dashboard;
