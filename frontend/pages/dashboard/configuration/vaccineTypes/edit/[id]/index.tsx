import { ButtonSmall } from "@/components/ButtonSmall";
import styles from "./index.module.css";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useRouter } from "next/navigation";
import { petsApi, vaccinesApi } from "@/api";

export const getServerSideProps = async (req: any) => {
  const { id } = req.params;
  const petTypes = await petsApi.getTypes();
  const [vaccineType] = await vaccinesApi.getType(Number(id));
  console.log(vaccineType);
  return {
    props: {
      id,
      petTypes,
      vaccineType,
    },
  };
};

const EditVaccineType = (props: any) => {
  const { id, petTypes, vaccineType } = props;

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
            <select
              className="form-control"
              name="pet_type"
              id="pet_type"
              required
            >
              <option value={0}>Seleccione una opción</option>
              {petTypes.map((type: any, index: number) => (
                <option
                  key={index}
                  value={type.id}
                  selected={vaccineType.pet_type === type.id}
                >
                  {type.name}
                </option>
              ))}
            </select>
          </div>
          <ButtonSmall type="submit" name="Guardar" />
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EditVaccineType;
