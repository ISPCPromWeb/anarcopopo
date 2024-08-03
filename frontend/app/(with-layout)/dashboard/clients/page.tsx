import { UserForm } from "@/components/UserForm";
import styles from "./page.module.css";
/* import { sessionId } from "@/utils/auth"; */
import { redirect } from "next/navigation";
import { userApi } from "@/api";
import Link from "next/link";

const Clients = async () => {
  const clients = await userApi.getAll();

  /* if (!sessionId) {
    redirect("/login");
    return null;
  } */

  return (
    <div className={styles.clientsList}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">DNI</th>
            <th scope="col">Mascotas</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client: any, index: number) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.surname}</td>
              <td>{client.dni}</td>
              <td>
                {client.pets.map((pet: any, index: number) => (
                  <Link key={index} href={`/dashboard/pets/${pet.id}`}>
                    {pet.name}
                  </Link>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
