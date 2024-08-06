import { ButtonSmall } from "@/components/ButtonSmall";
import styles from "./index.module.css";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useRouter } from "next/navigation";
import { vaccinesApi } from "@/api";

export const getServerSideProps = async (req: any) => {
  const { id } = req.params;
  const [vaccineType] = await vaccinesApi.getType(Number(id));
  return {
    props: {
      id,
      vaccineType,
    },
  };
};

const EditVaccineType = (props: any) => {
  const { id, vaccineType } = props;

  const router = useRouter();
  const handleEditVaccineType = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      await vaccinesApi.updateType(id, formData);
      router.push("/dashboard/configuration/");
    } catch (error) {
      console.error("Vaccine Type update failed", error);
    }
  };

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <form
          className="g-3 pt-4 mt-4 mx-4"
          onSubmit={handleEditVaccineType}
          encType="multipart/form-data"
        >
          <div className="col-md-4">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              required
              defaultValue={vaccineType.name}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="pet_type" className="form-label">
              Tipo de Mascota
            </label>
            <input
              type="text"
              className="form-control"
              name="pet_type"
              id="pet_type"
              required
              defaultValue={vaccineType.pet_type}
            />
          </div>
          <ButtonSmall type="submit" name="Guardar" />
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EditVaccineType;
