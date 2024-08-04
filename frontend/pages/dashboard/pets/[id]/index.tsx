import styles from "./index.module.css";
import { petsApi } from "@/api";

export const getServerSideProps = async (req: any) => {
  const { id } = req.params;
  const [pet] = await petsApi.getOne(Number(id));
  return {
    props: {
      pet,
    },
  };
};

const Pet = (props: any) => {
  const { pet } = props;

  return (
    <div className={styles.clientsList}>
      <h1>Aca va el {pet.name}</h1>
    </div>
  );
};

export default Pet;
