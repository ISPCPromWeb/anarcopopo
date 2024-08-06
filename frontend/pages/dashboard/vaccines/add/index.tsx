import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import { productsApi } from "@/api";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { ButtonSmall } from "@/components/ButtonSmall";
import { vaccinesApi } from "@/api";

const AddVaccine = () => {
  const router = useRouter();
  const handleAddVaccine = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      await vaccinesApi.createOne(formData);
      router.push("/dashboard/vaccines");
    } catch (error) {
      console.error("Vaccine creation failed", error);
    }
  };

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <form
          className="g-3 pt-4 mt-4 mx-4"
          onSubmit={handleAddVaccine}
          encType="multipart/form-data"
        >
          <div className="col-md-4">
            <label htmlFor="type" className="form-label">
              Nombre de la Vacuna Aplicada
            </label>
            <input
              type="text"
              className="form-control"
              name="type"
              id="type"
              required
              defaultValue={""}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="app_date" className="form-label">
              Fecha de Aplicación
            </label>
            <input
              type="datetime-local"
              className="form-control"
              name="app_date"
              id="app_date"
              defaultValue={""}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="pet" className="form-label">
              Mascota
            </label>
            <input
              type="text"
              className="form-control"
              name="pet"
              id="pet"
              required
              defaultValue={""}
            />
          </div>
          <ButtonSmall type="submit" name="Agregar Vacuna" />
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AddVaccine;
