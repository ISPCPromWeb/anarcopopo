import { ButtonSmall } from "@/components/ButtonSmall";
import styles from "./index.module.css";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useRouter } from "next/navigation";
import { petsApi } from "@/api";

export const getServerSideProps = async (req: any) => {
  const { id } = req.params;
  const [petType] = await petsApi.getType(Number(id));
  return {
    props: {
      id,
      petType,
    },
  };
};

const EditPetType = (props: any) => {
  const { id, petType } = props;

  const router = useRouter();
  const handleEditPetType = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      await petsApi.updateType(id, formData);
      router.push("/dashboard/configuration/");
    } catch (error) {
      console.error("Pet Type update failed", error);
    }
  };

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <form
          className="g-3 pt-4 mt-4 mx-4"
          onSubmit={handleEditPetType}
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
              defaultValue={petType.name}
            />
          </div>

          <ButtonSmall type="submit" name="Guardar" />
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EditPetType;
