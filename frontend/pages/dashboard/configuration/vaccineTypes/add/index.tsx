import { useRouter } from "next/navigation";
import styles from "./index.module.css";

import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { ButtonSmall } from "@/components/ButtonSmall";
import { vaccinesApi } from "@/api";

const AddVaccineType = () => {
  const router = useRouter();
  const handleAddVaccineType = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      await vaccinesApi.createType(formData);
      router.push("/dashboard/configuration");
    } catch (error) {
      console.error("Vaccine Type creation failed", error);
    }
  };

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <form
          className="g-3 pt-4 mt-4 mx-4"
          onSubmit={handleAddVaccineType}
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
              defaultValue={""}
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
              defaultValue={""}
            />
          </div>

          <ButtonSmall type="submit" name="Agregar Nueva Vacuna" />
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddVaccineType;
