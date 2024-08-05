import Link from "next/link";
import styles from "./index.module.css";
import { productsApi } from "@/api";
import Image from "next/image";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { ButtonSmall } from "@/components/ButtonSmall";

export const getServerSideProps = async () => {
  const products = await productsApi.getAll();
  return {
    props: {
      products,
    },
  };
};

const Products = (props: any) => {
  const { products } = props;

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <div className="w-100 my-4">
          <Link href={`/dashboard/products/add`}>
            <ButtonSmall name="Agregar Producto" type="button" />
          </Link>
        </div>
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
                    src={`http://localhost:8001${pet.img}`}
                    alt={pet.name}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default Products;
