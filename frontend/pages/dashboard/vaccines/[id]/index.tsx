import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import styles from "./index.module.css";
import Link from "next/link";
import { ButtonSmall } from "@/components/ButtonSmall";
import { vaccinesApi } from "@/api";

export const getServerSideProps = async (req: any) => {
  const { id } = req.params;
  const [vaccine] = await vaccinesApi.getOne(Number(id));
  return {
    props: {
      vaccine,
    },
  };
};

const Vaccine = (props: any) => {
  const { vaccine } = props;

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <ul className="list-group">
          <li className="list-group-item">
            <span>Tipo: </span> <span>{vaccine.name}</span>
          </li>
          <li className="list-group-item">
            <span>Fecha: </span> <span>{vaccine.app_date}</span>
          </li>
          <li className="list-group-item">
            <span>Mascota: </span> <span>{vaccine.pet}</span>
          </li>
        </ul>
      </div>
      <Link href={`/dashboard/vaccine/edit/${vaccine.id}`}>
        <ButtonSmall type="button" name="Editar" />
      </Link>
    </DashboardLayout>
  );
};

export default Vaccine;
