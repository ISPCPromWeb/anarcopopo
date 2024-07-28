// import { productsApi } from "@/api/products";
import { products as mockedProducts } from "@/constants";
import styles from "./page.module.css";
import ServicesSection from "@/components/ServicesSection/page";
import ServiceSection from "@/components/ServiceSection/page";

const Home = async () => {
  // const products = await productsApi.getAll;
  const products = mockedProducts;

  return (
    <main id="main" className={styles.main}>
      <section className={`${styles.hero} px-5 text-left d-flex`} id="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade  m-auto d-inline"
                data-bs-interval="1500"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/grupo-6-g6/Img/LogoDark.png"
                      className=" logo"
                      alt=""
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/grupo-6-g6/Img/LogoLight.png"
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
              <p className="mt-5 fs-4">
                Contá con la información de tus mascotas/pacientes de manera
                rápida y confiable. En cualquier lugar, en cualquier momento.
              </p>
            </div>
            <a
              className={`${styles.vinculos} col-auto mx-auto my-5 text-center`}
              href={"/login/"}
            >
              Ingreso para Dueñas/os aquí
            </a>
          </div>
        </div>
      </section>

      <section className={styles.popularProducts}>
        <h2>Productos Destacados</h2>
        <div className={styles.cardsContainer}>
          {products.map((product: any, index: number) => (
            <div className={styles.cardWrapper} key={index}>
              <img className={styles.cardImage} src="" alt="" />
              <p className={styles.cardTitle}>{product.name}</p>
              <p className={styles.cardPrice}>{product.price}</p>
            </div>
          ))}
        </div>
        <a href={"/tienda"}>Ver todos los productos</a>
      </section>
      <ServicesSection />

      <div className={`${styles.servicios} bg-white`}>
        <div className={`row ${styles.servicioFila}`}>
          <div className="col-lg-7 d-flex">
            <div className="align-self-center p-5">
              <h2 className="display-4 fw-bold m-4">Para Dueños</h2>
              <p className="mx-4 mt-4 mb-5 fs-3">
                Chequeá la salud de tu mascota y elegí el alimento adecuado para
                sus necesidades. También aquí conseguirás los oufits que están
                de moda para lookearlos.
              </p>
              <p
                className={`${styles.parag}text-decoration-underline fst-italic mt-3 fs-4 text-end`}
              >
                Próximamente:
              </p>
              <ul className={`${styles.lista2} text-end`}>
                <li className="text-end">
                  Estudios y procedimientos realizados.
                </li>
                <li className={`${styles.elemLista2} text-end mb-5`}>
                  Agenda de turnos.
                </li>
              </ul>
              <a
                className={`${styles.vinculos} mx-5 my-5 text-center`}
                href={"/login/"}
              >
                Ingreso para Dueñas/os aquí
              </a>
            </div>
          </div>
          <div className="col-lg-5 d-flex icono-wrap">
            <div className="align-items-center text-center mx-auto me-5 p-5">
              <img
                src="/grupo-6-g6/Img/IconoDueños.png"
                className={`img-fuid ${styles.imgVetDuenos}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
