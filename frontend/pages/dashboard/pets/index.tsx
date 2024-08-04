import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import styles from "./index.module.css";
import { petsApi, userApi } from "@/api";

export const getServerSideProps = async () => {
  const pets = await petsApi.getAll();
  return {
    props: {
      pets,
    },
  };
};

const Pets = (props) => {
  const { pets } = props;

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
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
                <td>{pet.name}</td>
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
      </div>
    </DashboardLayout>
  );
};

export default Pets;
