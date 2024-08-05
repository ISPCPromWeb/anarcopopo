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
      <form onSubmit={handleAddVaccine} encType="multipart/form-data">
        <div className="col-md-4">
          <label htmlFor="nombre" className="form-label">
            Tipo
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
          <label htmlFor="description" className="form-label">
            Fecha
          </label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="description"
            required
            defaultValue={""}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="quantity" className="form-label">
            Mascota
          </label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            id="quantity"
            required
            defaultValue={""}
          />
        </div>
        <ButtonSmall type="submit" name="Agregar Vacuna" />
      </form>
    </DashboardLayout>
  );
};

export default AddVaccine;
