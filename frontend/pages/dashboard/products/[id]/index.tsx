import styles from "./index.module.css";
import { productsApi } from "@/api";

export const getServerSideProps = async (req: any) => {
  const { id } = req.params;
  const [product] = await productsApi.getOne(Number(id));
  return {
    props: {
      product,
    },
  };
};

const Product = (props: any) => {
  const { product } = props;

  return (
    <div className={styles.clientsList}>
      <h1>Aca va el {product.name}</h1>
    </div>
  );
};

export default Product;
