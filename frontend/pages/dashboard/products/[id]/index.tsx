import styles from "./index.module.css";
import { productsApi } from "@/api";

const Product = (props: any) => {
  const {
    params: { id },
  } = props;
  /* const [product] = await productsApi.getOne(id); */

  return (
    <div className={styles.clientsList}>
      {/* <h1>Aca va el {product.name}</h1> */}
    </div>
  );
};

export default Product;
