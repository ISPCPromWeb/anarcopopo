import { Navigation } from "../Navigation";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <a className={styles.skipMain} href="#main">
        Saltar al contenido
      </a>
      <Navigation />
    </header>
  );
};
