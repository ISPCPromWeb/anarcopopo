import Link from "next/link";
import styles from "./index.module.css";
import { productsApi } from "@/api";
import Image from "next/image";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { ButtonSmall } from "@/components/ButtonSmall";
import { useRouter } from "next/navigation";

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

  const router = useRouter();
  const handleDeleteProduct = async (id: number) => {
    try {
      await productsApi.deleteOne(id);
      router.refresh();
    } catch (error) {
      console.error("Product deletion failed", error);
    }
  };

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <div className="w-100 my-4">
          <Link href={`/dashboard/products/add`}>
            <ButtonSmall name="Agregar Producto" type="button" />
          </Link>
        </div>
        {products.length !== 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Disponible</th>
                <th scope="col">Precio</th>
                <th scope="col">Imagen</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: any, index: number) => (
                <tr key={index}>
                  <td>
                    <Link href={`/dashboard/products/${product.id}`}>
                      {product.name}
                    </Link>
                  </td>
                  <td>{product.description}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>
                    {product.img ? (
                      <Image
                        width={100}
                        height={100}
                        src={`http://localhost:8001${product.img}`}
                        alt={""}
                      />
                    ) : (
                      <span>Sin imagen</span>
                    )}
                  </td>
                  <td>
                    <Link href={`/dashboard/products/edit/${product.id}`}>
                      <ButtonSmall name="Editar" type="button" />
                    </Link>
                    <ButtonSmall
                      callback={() => handleDeleteProduct(product.id)}
                      type={`button`}
                      name={`Borrar`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <h3>No tienes productos en este momento</h3>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Products;
