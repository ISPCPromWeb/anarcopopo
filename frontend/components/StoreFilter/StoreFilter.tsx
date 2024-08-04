import styles from "./StoreFilter.module.css";
// import { productsApi } from "@/api/products";
import { products as mockedProducts } from "@/constants";

export const StoreFilter = () => {
  return (
    <>
      <div className={`${styles.contenedor} col-3 p-3`}>
        <h4 className="d-flex align-items-center pb-3 mb-3  text-decoration-none border-bottom">
          <svg className="bi pe-none me-2" width="30" height="24">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          Filtros
        </h4>
        <ul className="list-unstyled ps-0">
          <li className={`mb-1`}>
            <button
              className={`${styles.lista} btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed`}
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              Tipo de Mascota
            </button>
            <div className="collapse show" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li className={`${styles.elemLista2}`}>
                  <a
                    href="#"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Gato
                  </a>
                </li>
                <li className={`${styles.elemLista2}`}>
                  <a
                    href="#"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Perro
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className={`${styles.lista} btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed`}
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="true"
            >
              Tipo de Producto
            </button>
            <div className="collapse show" id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li className={`${styles.elemLista2}`}>
                  <a
                    href="#"
                    className={` link-body-emphasis d-inline-flex text-decoration-none rounded`}
                  >
                    Alimento
                  </a>
                </li>
                <li className={`${styles.elemLista2}`}>
                  <a
                    href="#"
                    className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                  >
                    Accesorios
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
