import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import styles from "./index.module.css";
import { petsApi, userApi } from "@/api";
import Link from "next/link";
import { ButtonSmall } from "@/components/ButtonSmall";

export const getServerSideProps = async () => {
  const pets = await petsApi.getAll();
  return {
    props: {
      pets,
    },
  };
};

const Pets = (props: any) => {
  const { pets } = props;

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <div className="w-100 my-4">
          <Link href={`/dashboard/pets/add`}>
            <ButtonSmall name="Agregar Mascota" type="button" />
          </Link>
        </div>
        {pets.length !== 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Raza</th>
                <th scope="col">Vacunas</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet: any, index: number) => (
                <tr key={index}>
                  <td>
                    <Link href={`/dashboard/pets/${pet.id}`}>{pet.name}</Link>
                  </td>
                  <td>{pet.type}</td>
                  <td>{pet.breed}</td>
                  <td>
                    {pet.vaccines.map((vaccine: any, index: number) => (
                      <span key={index}>{vaccine.name}</span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h3>No tienes mascotas en este momento</h3>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Pets;
