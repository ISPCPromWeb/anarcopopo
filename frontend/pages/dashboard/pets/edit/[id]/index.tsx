import { ButtonSmall } from "@/components/ButtonSmall";
import styles from "./index.module.css";
import { petsApi } from "@/api";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";

export const getServerSideProps = async (req: any) => {
  const { id } = req.params;
  const [pet] = await petsApi.getOne(Number(id));
  return {
    props: {
      pet,
    },
  };
};

const Pet = (props: any) => {
  const { pet } = props;

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <form className="row g-3 pt-4 mt-4">
          <div className="col-md-4">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              required
              defaultValue={pet.name}
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="dni" className="form-label">
              Edad
            </label>
            <input
              type="text"
              className="form-control"
              name="dni"
              id="dni"
              placeholder="12345678"
              pattern="[0-9]{8}"
              required
              defaultValue={pet.age}
            />
          </div>

          <div className="col-12 pt-4 mt-4">
            <ButtonSmall type="submit" name="Guardar" />
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Pet;
