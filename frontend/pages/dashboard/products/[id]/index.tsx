import Link from "next/link";
import styles from "./index.module.css";
import { productsApi } from "@/api";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { ButtonSmall } from "@/components/ButtonSmall";

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
    <DashboardLayout>
      <div className={styles.clientsList}>
        <ul className="list-group">
          <li className="list-group-item">
            <span>Nombre: </span> <span>{product.name}</span>
          </li>
          <li className="list-group-item">
            <span>Descripción: </span> <span>{product.description}</span>
          </li>
          <li className="list-group-item">
            <span>Disponible: </span> <span>{product.stock}</span>
          </li>
          <li className="list-group-item">
            <span>Precio: </span> <span>{product.price}</span>
          </li>
          <li className="list-group-item">
            <span>Image: </span>{" "}
            <img src={`http://localhost:8000${product.img}`} />
          </li>
        </ul>
      </div>
      <Link href={`/dashboard/product/edit/${product.id}`}>
        <ButtonSmall type="button" name="Editar" />
      </Link>
    </DashboardLayout>
  );
};

export default Product;
