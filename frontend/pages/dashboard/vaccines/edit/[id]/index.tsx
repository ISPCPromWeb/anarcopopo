import { ButtonSmall } from "@/components/ButtonSmall";
import styles from "./index.module.css";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useRouter } from "next/navigation";
import { vaccinesApi } from "@/api";

export const getServerSideProps = async (req: any) => {
  const { id } = req.params;
  const [vaccine] = await vaccinesApi.getOne(Number(id));
  return {
    props: {
      id,
      vaccine,
    },
  };
};

const EditVaccine = (props: any) => {
  const { id, vaccine } = props;

  const router = useRouter();
  const handleEditVaccine = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      await vaccinesApi.updateOne(id, formData);
      router.push("/dashboard/vaccines");
    } catch (error) {
      console.error("Vaccine update failed", error);
    }
  };

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <form
          className="g-3 pt-4 mt-4 mx-4"
          onSubmit={handleEditVaccine}
          encType="multipart/form-data"
        >
          <div className="col-md-4">
            <label htmlFor="nombre" className="form-label">
              Mascota
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              required
              defaultValue={vaccine.pet}
            />
          </div>
          <ButtonSmall type="submit" name="Editar" />
        </form>
      </div>
    </DashboardLayout>
  );
};

export default EditVaccine;
