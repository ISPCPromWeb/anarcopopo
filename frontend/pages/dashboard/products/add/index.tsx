import { useRouter } from "next/navigation";
import styles from "./index.module.css";
import { productsApi } from "@/api";
import DashboardLayout from "@/components/DashboardLayout/DashboardLayout";
import { ButtonSmall } from "@/components/ButtonSmall";

const AddProduct = () => {
  const router = useRouter();
  const handleAddProduct = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    console.log(formData.get("name"));
    try {
      await productsApi.createOne(formData);
      router.push("/dashboard/products");
    } catch (error) {
      console.error("Product creation failed", error);
    }
  };

  return (
    <DashboardLayout>
      <form
        className="g-3 pt-4 mt-4 mx-4"
        onSubmit={handleAddProduct}
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
            defaultValue={""}
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
            defaultValue={""}
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
            defaultValue={""}
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
            defaultValue={""}
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
            defaultValue={""}
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
            defaultValue={""}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="img" className="form-label">
            Imagen
          </label>
          <input
            type="file"
            className="form-control"
            name="img"
            id="img"
            required
          />
        </div>
        <ButtonSmall type="submit" name="Agregar Producto" />
      </form>
    </DashboardLayout>
  );
};

export default AddProduct;
