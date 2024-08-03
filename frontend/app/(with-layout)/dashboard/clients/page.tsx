import { UserForm } from "@/components/UserForm";
import styles from "./page.module.css";
import { sessionId } from "@/utils/auth";
import { redirect } from "next/navigation";
import { userApi } from "@/api";

const Clients = async () => {
  const clients = await userApi.getAll();
  console.log(clients[0].pets);
  if (!sessionId) {
    redirect("/login");
    return null;
  }

  return (
    <div className={styles.clientsList}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">DNI</th>
            <th scope="col">Pets</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client: any, index: number) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.surname}</td>
              <td>{client.dni}</td>
              {/* <td>{client.pets}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
