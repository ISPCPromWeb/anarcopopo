import Link from "next/link";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container">
        <Link className={`${styles.vincnav} navbar-brand fw-bold`} href={`/`}>
          <img className="isotipoNav mx-3" src="/assets/IsoLight.png" alt="" />
          My Pet
        </Link>
        <button
          className={`navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon`}></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
          <ul className={`navbar-nav ms-auto mb-1 mb-lg-0`}>
            <li className={`nav-item`}>
              <Link
                className={`${styles.vincnav} nav-link active fw-bold`}
                aria-current="page"
                href="#"
              >
                Ingreso para Veterinarias
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="vincnav nav-link disabled"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                App Dueños de Mascotas
              </Link>
            </li>
            <li className="nav-item">
              <a className="vincnav nav-link active" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
