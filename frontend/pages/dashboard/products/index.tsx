import Link from "next/link";
import styles from "./index.module.css";
import { productsApi } from "@/api";
import Image from "next/image";

export const getServerSideProps = async () => {
  const products = await productsApi.getAll();
  return {
    props: {
      products,
    },
  };
};

const Products = (props) => {
  const { products } = props;

  return (
    <div className={styles.clientsList}>
      <Link href={`/dashboard/products/new`}>Agregar Producto</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Disponible</th>
            <th scope="col">Imagen</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pet: any, index: number) => (
            <tr key={index}>
              <td>{pet.name}</td>
              <td>{pet.description}</td>
              <td>{pet.quantity}</td>
              <td>
                <Image
                  width={100}
                  height={100}
                  src={`/products${pet.img}`}
                  alt={pet.name}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
