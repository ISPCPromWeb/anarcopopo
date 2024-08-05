import { ButtonSmall } from "@/components/ButtonSmall";
import styles from "./index.module.css";
import { petsApi } from "@/api";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useRouter } from "next/navigation";

export const getServerSideProps = async (req: any) => {
  const { id } = req.params;
  const [pet] = await petsApi.getOne(Number(id));
  return {
    props: {
      id,
      pet,
    },
  };
};

const EditPet = (props: any) => {
  const { id, pet } = props;
  const router = useRouter();
  const handleEditClient = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      await petsApi.updateOne(id, formData);
      router.push("/dashboard/pets");
    } catch (error) {
      console.error("Pet update failed", error);
    }
  };

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <form
          className="row g-3 pt-4 mt-4"
          action={handleEditClient}
          encType="multipart/form-data"
        >
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

export default EditPet;
