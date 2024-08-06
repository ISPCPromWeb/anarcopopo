import Link from "next/link";
import styles from "./index.module.css";
import { productsApi } from "@/api";
import Image from "next/image";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { ButtonSmall } from "@/components/ButtonSmall";
import { vaccinesApi } from "@/api/vaccines";
import { useRouter } from "next/navigation";

export const getServerSideProps = async () => {
  const vaccines = await vaccinesApi.getAll();
  console.log(vaccines);
  return {
    props: {
      vaccines,
    },
  };
};

const Vaccines = (props: any) => {
  const { vaccines } = props;

  const router = useRouter();
  const handleDeleteVaccine = async (id: number) => {
    try {
      await vaccinesApi.deleteOne(id);
      router.refresh();
    } catch (error) {
      console.error("Vaccine deletion failed", error);
    }
  };

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <div className="w-100 my-4">
          <Link href={`/dashboard/vaccines/add`}>
            <ButtonSmall name="Agregar Aplicación de Vacuna" type="button" />
          </Link>
        </div>
        {vaccines.length !== 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tipo</th>
                <th scope="col">Fecha</th>
                <th scope="col">Mascota</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {vaccines.map((vaccine: any, index: number) => (
                <tr key={index}>
                  <td>{vaccine.type}</td>
                  <td>{vaccine.app_date}</td>
                  <td>{vaccine.pet}</td>
                  <td>
                    <Link href={`/dashboard/vaccines/edit/${vaccine.id}`}>
                      <ButtonSmall name="Editar" type="button" />
                    </Link>
                    <ButtonSmall
                      callback={() => handleDeleteVaccine(vaccine.id)}
                      type={`button`}
                      name={`Borrar`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h3>No tienes vacunas en este momento</h3>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Vaccines;
