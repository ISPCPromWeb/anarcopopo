import Link from "next/link";
import styles from "./index.module.css";
import { productsApi } from "@/api";
import Image from "next/image";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { ButtonSmall } from "@/components/ButtonSmall";
import { vaccinesApi } from "@/api/vaccines";

export const getServerSideProps = async () => {
  const vaccines = await vaccinesApi.getAll();
  return {
    props: {
      vaccines,
    },
  };
};

const Vaccines = (props: any) => {
  const { vaccines } = props;

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <div className="w-100 my-4">
          <Link href={`/dashboard/vaccines/add`}>
            <ButtonSmall name="Agregar Aplicación de Vacuna" type="button" />
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tipo</th>
              <th scope="col">Fecha</th>
              <th scope="col">Mascota</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((vaccine: any, index: number) => (
              <tr key={index}>
                <td>{vaccine.type}</td>
                <td>{vaccine.app_date}</td>
                <td>{vaccine.pet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Vaccines;
