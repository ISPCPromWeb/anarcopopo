import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import { petsApi } from "@/api";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { ButtonSmall } from "@/components/ButtonSmall";

const NewPet = () => {
  const router = useRouter();
  const handleAddPet = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      await petsApi.createOne(formData);
      router.push("/dashboard/pets");
    } catch (error) {
      console.error("Pet creation failed", error);
    }
  };

  return (
    <DashboardLayout>
      <form
        className="row g-3 pt-4 mt-4 mx-4"
        onSubmit={handleAddPet}
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
            defaultValue={""}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="type" className="form-label">
            Tipo
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
          <label htmlFor="breed" className="form-label">
            Raza
          </label>
          <input
            type="text"
            className="form-control"
            name="breed"
            id="bredd"
            required
            defaultValue={""}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="age" className="form-label">
            Edad
          </label>
          <input
            type="text"
            className="form-control"
            name="age"
            id="age"
            required
            defaultValue={""}
          />
        </div>
        <div className="col-md-4 mb-2">
          <label htmlFor="owner" className="form-label">
            Dueña/o
          </label>
          <input
            type="text"
            className="form-control"
            name="owner"
            id="owner"
            required
            defaultValue={""}
          />
        </div>
        <div className="mb-2">
          <ButtonSmall type="submit" name="Agregar Mascota" />
        </div>
      </form>
    </DashboardLayout>
  );
};

export default NewPet;
