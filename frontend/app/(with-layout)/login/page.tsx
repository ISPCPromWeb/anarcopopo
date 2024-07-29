import Image from "next/image";
import styles from "./page.module.css";

const Login = () => {
  return (
    <>
      <main>
        <section className="">
          <div className={`${styles.row} g-0`}>
            <div
              className={`${styles.fondoCarrusel} col-lg-7 d-none d-lg-block`}
            >
              <div
                id="carouselExampleCaptions"
                className="carousel slide min-vh-100"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item min-vh-100 active img-1">
                    <div className="carousel-caption d-none d-md-block">
                      <h5>La mejor atención</h5>
                      <p></p>
                    </div>
                  </div>
                  <div className="carousel-item min-vh-100 img-2">
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Protección tu Mascotas. Tranquilidad para ti</h5>
                      <p></p>
                    </div>
                  </div>
                  <div className="carousel-item min-vh-100 img-3">
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Comprometidos con el bienestar de tu Mascota</h5>
                      <p></p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="col-lg-5 d-flex flex-column align-items-end min-vh-100">
              <div className="px-lg-5 pt-lg-4 pb-lg-3 w-100 mb-auto">
                <h1 className={`${styles.h1} fw-bold text-center`}>My Pet</h1>
              </div>
              <div className="px-lg-5 py-lg-4 px-5 w-100 mt-auto">
                <h2 className={`${styles.h2} mb-5`}>Bienvenida/o</h2>
                <form action={`/login/api`} method="post">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label fw-bold"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control border-2 mb-2"
                      placeholder="Ingresa tu Email"
                      aria-describedby="emailHelp"
                    />

                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label fw-bold"
                      >
                        Contraseña:
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control border-2 mb-2"
                        placeholder="Ingresa tu Contraseña"
                      />
                      <a
                        href="#"
                        id="emailHelp"
                        className="form-text text-decoration-none"
                      >
                        Has olvidado tu Contraseña?
                      </a>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`${styles.btn} ${styles.vincnav} w-30 align-center`}
                  >
                    Ingresar
                  </button>
                </form>
              </div>
              <div className="text-center px-lg-5 pt-lg-3 pb-lg-4 p-4 w-100 mt-auto">
                <p className="d-inline-block nb-0"></p>
                <a href="#" className="text-decoration-none fw-bold"></a>
              </div>
            </div>
          </div>
        </section>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
          crossOrigin="anonymous"
        ></script>
      </main>
    </>
  );
};

export default Login;
