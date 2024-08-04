import styles from "./index.module.css";
import { petsApi } from "@/api";

const Pet = (props: any) => {
  const {
    params: { id },
  } = props;
  /* const [pet] = await petsApi.getOne(id); */

  return (
    <div className={styles.clientsList}>
      {/* <h1>Aca va el {pet.name}</h1> */}
    </div>
  );
};

export default Pet;
