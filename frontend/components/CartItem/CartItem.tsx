import styles from "./CartItem.module.css";
// import { productsApi } from "@/api/products";
import { products as mockedProducts } from "@/constants";
import { formattedPrice } from "@/utils";

export const CartItem = async () => {
  // const products = await productsApi.getAll;

  const products = mockedProducts;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                className={`${styles.imgCart} img-fluid rounded-3`}
                alt="Shopping item"
              />
            </div>
            <div className="ms-3">
              <h5>Iphone 11 pro</h5>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div className={styles.divCant}>
              <h5 className="fw-normal mb-0">2</h5>
            </div>
            <div className={styles.divPrice}>
              <h5 className="mb-0">$900</h5>
            </div>
            <a href="#!">
              <i className="fas fa-trash-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
