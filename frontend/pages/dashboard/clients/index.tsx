import styles from "./index.module.css";
import { userApi } from "@/api";
import Link from "next/link";

const Clients = () => {
  /* const clients = await userApi.getAll(); */

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
