import styles from "./index.module.css";
import { userApi } from "@/api";
import { ButtonSmall } from "@/components/ButtonSmall";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const getServerSideProps = async () => {
  const clients = await userApi.getAll();
  return {
    props: {
      clients,
    },
  };
};

const Clients = (props: any) => {
  const { clients } = props;

  const router = useRouter();
  const handleDeleteUser = async (id: number) => {
    try {
      await userApi.deleteOne(id);
      router.refresh();
    } catch (error) {
      console.error("User deletion failed", error);
    }
  };

  return (
    <DashboardLayout>
      <div className={`${styles.clientsList}`}>
        <div className="w-100 my-4">
          <Link href={`/dashboard/clients/add`}>
            <ButtonSmall name="Agregar Usuario" type="button" />
          </Link>
        </div>
        {clients.length !== 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
                <th scope="col">DNI</th>
                <th scope="col">Mascotas</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client: any, index: number) => (
                <tr key={index}>
                  <td>
                    <Link href={`/dashboard/clients/${client.id}`}>
                      {client.name}
                    </Link>
                  </td>
                  <td>{client.surname}</td>
                  <td className="text-break">{client.email}</td>
                  <td>{client.dni}</td>
                  <td>
                    {client.pets.map((pet: any, index: number) => (
                      <Link key={index} href={`/dashboard/pets/${pet.id}`}>
                        {pet.name}
                      </Link>
                    ))}
                  </td>
                  <td>
                    <ButtonSmall
                      callback={() => handleDeleteUser(client.id)}
                      type={`button`}
                      name={`Eliminar`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h3>No tienes clientes en este momento</h3>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Clients;
