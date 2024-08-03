import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { petsApi } from "@/api";

const Pet = async (props: any) => {
  const {
    params: { id },
  } = props;
  const [pet] = await petsApi.getOne(id);

  return (
    <div className={styles.clientsList}>
      <h1>Aca va el {pet.name}</h1>
    </div>
  );
};

export default Pet;
