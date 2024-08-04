import styles from "./index.module.css";
import { productsApi } from "@/api";

const NewProduct = async () => {
  return (
    <form>
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
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default NewProduct;
