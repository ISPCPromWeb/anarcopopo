import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <a className={styles.skipMain} href="#main">
        Saltar al contenido
      </a>
      <nav
        className={`${styles.navbar} navbar navbar-expand-lg bg-transparent`}
      >
        <div className="container">
          <a className={`${styles.vincnav} navbar-brand fw-bold`} href="#">
            <img
              className="isotipoNav mx-3"
              src="../static/Img/IsoLight.png"
              alt=""
            />
            My Vet
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-1 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`${styles.vincnav} nav-link active fw-bold me-4`}
                  href="/store"
                  aria-current="page"
                >
                  Tienda
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${styles.vincnav} nav-link active fw-bold me-4`}
                  aria-current="page"
                  href="/login"
                >
                  Ingresá
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
