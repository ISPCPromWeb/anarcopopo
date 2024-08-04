import { cookies } from "next/headers";
import styles from "./Header.module.css";
import { Navigation } from "../Navigation";

export const Header = (props: any) => {
  const { type } = props;
  return (
    <header>
      <a className={styles.skipMain} href="#main">
        Saltar al contenido
      </a>
      <Navigation />
    </header>
  );
};
