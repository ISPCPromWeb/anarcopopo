import { ButtonSmall } from "@/components/ButtonSmall";
import styles from "./index.module.css";
import { productsApi } from "@/api";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

export const getServerSideProps = async (req: any) => {
  const { id } = req.params;
  const [product] = await productsApi.getOne(Number(id));
  return {
    props: {
      id,
      product,
    },
  };
};

const Pet = (props: any) => {
  const { id, product } = props;
  const [isImageChanging, setIsImageChanging] = useState(false);

  const router = useRouter();
  const handleEditProduct = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      await productsApi.updateOne(id, formData);
      router.push("/dashboard/products");
    } catch (error) {
      console.error("Product update failed", error);
    }
  };

  return (
    <DashboardLayout>
      <div className={styles.clientsList}>
        <form
          className="g-3 pt-4 mt-4 mx-4"
          onSubmit={handleEditProduct}
          encType="multipart/form-data"
        >
          <div className="col-md-4">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              required
              defaultValue={product.name}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="description" className="form-label">
              Descripción
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              id="description"
              required
              defaultValue={product.description}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="quantity" className="form-label">
              Disponibles
            </label>
            <input
              type="text"
              className="form-control"
              name="quantity"
              id="quantity"
              required
              defaultValue={product.quantity}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="price" className="form-label">
              Precio
            </label>
            <input
              type="text"
              className="form-control"
              name="price"
              id="price"
              required
              defaultValue={product.price}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="type" className="form-label">
              Tipo de Producto
            </label>
            <input
              type="text"
              className="form-control"
              name="type"
              id="type"
              required
              defaultValue={product.type}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="pet_type" className="form-label">
              Tipo de Mascota
            </label>
            <input
              type="text"
              className="form-control"
              name="pet_type"
              id="pet_type"
              required
              defaultValue={product.pet_type}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="img" className="form-label">
              Imagen
            </label>
            {!isImageChanging && (
              <div className="d-flex">
                <Image
                  width={200}
                  height={200}
                  src={`http://localhost:8001${product.img}`}
                  alt=""
                />
                <ButtonSmall
                  callback={() => setIsImageChanging(!isImageChanging)}
                  type="button"
                  name="Cambiar Imagen"
                />
              </div>
            )}
            {isImageChanging && (
              <div className="d-flex">
                <input
                  type="file"
                  className="form-control"
                  name="img"
                  id="img"
                  required
                  defaultValue={""}
                />
                <ButtonSmall
                  callback={() => setIsImageChanging(!isImageChanging)}
                  type="button"
                  name="Cancelar"
                />
              </div>
            )}
          </div>
          <ButtonSmall type="submit" name="Guardar" />
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Pet;
