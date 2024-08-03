// import { productsApi } from "@/api/products";
import { products as mockedProducts } from "@/constants";
import styles from "./page.module.css";
import { Services } from "@/components/Services";
import { FeatProducts } from "@/components/FeatProducts";
import { StoreHeader } from "@/components/StoreHeader";

const Home = async () => {
  /* const products = await productsApi.getAll(); */
  const products = mockedProducts;

  return (
    <main id="main">
      <section className={`${styles.hero} px-5 text-left d-flex`} id="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade  m-auto d-inline"
                data-bs-interval="100"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./assets/LogoDark.png" className=" logo" alt="" />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./assets/LogoLight.png"
                      className={styles.logo}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <h1 className=" text-left py-5 ">My Vet</h1>
              <h2 className={`${styles.h2Hero} mt-2 fs-1`}>
                Sistema Integral de Gestión Veterinaria
              </h2>
              <p className="my-5 fs-4">
                Contá con la información de tus mascotas/pacientes de manera
                rápida y confiable. En cualquier lugar, en cualquier momento.
              </p>
              <a
                className={`${styles.vinculos} col-auto mx-auto my-5 justify-content-end`}
                href={"/login/"}
              >
                Ingreso para Dueñas/os aquí
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <h2 className={`${styles.h2Hero} display-4 fw-bold `}>
          My Vet Tienda{" "}
        </h2>
      </div>

      <FeatProducts />

      <Services />
    </main>
  );
};

export default Home;
