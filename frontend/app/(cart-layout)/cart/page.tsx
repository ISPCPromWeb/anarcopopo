import styles from "./page.module.css";
import { products as mockedProducts } from "@/constants";
import Link from "next/link";
import { CartItem } from "@/components/CartItem";
import { CheckoutButton } from "@/components/CheckoutButton";

const Cart = async () => {
  // const products = await productsApi.getAll;
  //const products = mockedProducts;

  // const Cart = async ({ params }: { params: { id: string } }) => {
  //   const data = await GET(params.id);
  //   const [product] = mockedProducts.filter(
  //     (product) => product.id === Number(params.id)
  //   );
  //   console.log(data);
  //   const formattedPrice = new Intl.NumberFormat("es-AR", {
  //     style: "currency",
  //     currency: "ARS",
  //   }).format(product.price);

  return (
    <>
      <div className="row g-5">
        <div className="col-md-12 col-lg-6 order-last ">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 className="mb-1">Tu Carrito</h3>
            </div>
          </div>

          <CartItem />

          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between py-4">
              <span>Total (ARS)</span>
              <strong>$20</strong>
            </li>
          </ul>
          <CheckoutButton product={mockedProducts[0]} />
        </div>

        <div className="col-md-12 col-lg-6 ">
          <h3>Datos de la compra</h3>
          <form className="needs-validation">
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Se requiere un nombre válido.
                </div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">
                  Se requiere apellido válido.
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="dni" className="form-label">
                  DNI (solo números)
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="dni"
                  id="dni"
                  placeholder="12345678"
                  pattern="[0-9]{8}"
                  required
                />
                <div className="invalid-feedback">Tu DNI es requerido</div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div className="invalid-feedback">
                  Ingresa tu dirección de email válida.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                />
                <div className="invalid-feedback">
                  Por favor introduce tu dirección de envío.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  Provincia
                </label>
                <select className="form-select" id="state" required>
                  <option value="">Seleccioná</option>
                  <option>Córdoba</option>
                  <option>Capital Federal</option>
                  <option>Buenos Aires</option>
                  <option>Santa Fe</option>
                  <option>Catamarca</option>
                  <option>Chaco</option>
                  <option>Chubut</option>
                  <option>Corrientes</option>
                  <option>Entre Ríos</option>
                  <option>Formosa</option>
                  <option>Jujuy</option>
                  <option>La Pampa</option>
                  <option>La Rioja</option>
                  <option>Mendoza</option>
                  <option>Misiones</option>
                  <option>Neuquén</option>
                  <option>Río Negro</option>
                  <option>Salta</option>
                  <option>San Juan</option>
                  <option>San Luis</option>
                  <option>Santa Cruz</option>
                  <option>Santiago del Estero</option>
                  <option>Tucumán</option>
                </select>
                <div className="invalid-feedback">
                  Selecciona una provincia válida.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="cp" className="form-label">
                  Código Postal
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cp"
                  placeholder=""
                  required
                />
                <div className="invalid-feedback">Código postal requerido.</div>
              </div>
            </div>

            <hr className="my-4" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Cart;
