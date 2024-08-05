import Link from "next/link";
import styles from "./index.module.css";
import { userApi } from "@/api";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { ButtonSmall } from "@/components/ButtonSmall";

export const getServerSideProps = async (req: any) => {
  const { id } = req.params;
  const [user] = await userApi.getOne(Number(id));
  return {
    props: {
      user,
    },
  };
};

const User = (props: any) => {
  const { user, name } = props;

  return (
    <DashboardLayout>
      <div
        className={`${styles.clientsList} container-fluid justify-content-center`}
      >
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span>Nombre: </span> <span>{user.name}</span>
          </li>
          <li className="list-group-item">
            <span>Apellido: </span> <span>{user.surname}</span>
          </li>
          <li className="list-group-item">
            <span>DNI: </span> <span>{user.dni}</span>
          </li>
          <li className="list-group-item">
            <span>Teléfono: </span> <span>{user.phone}</span>
          </li>
          <li className="list-group-item">
            <span>Dirección: </span> <span>{user.address}</span>
          </li>
          <li className="list-group-item">
            <span>Email: </span> <span>{user.email}</span>
          </li>
          <li className="list-group-item">
            <span>Mascotas: </span>{" "}
            <span>
              {user.pets.map((pet: any, index: number) => (
                <Link key={index} href={`/dashboard/pets/${pet.id}`}>
                  {pet.name}
                </Link>
              ))}
            </span>
          </li>
        </ul>
      </div>
      <a href={`/dashboard/clients/edit/${user.id}`}>
        <ButtonSmall type="button" name="Editar" />
      </a>
    </DashboardLayout>
  );
};

export default User;
