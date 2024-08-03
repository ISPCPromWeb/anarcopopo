import { sessionId, user } from "@/utils/auth";
import styles from "./Header.module.css";
import { Navigation } from "../Navigation";

export const Header = () => {
  const userName = user.name || user.email;

  return (
    <header>
      <a className={styles.skipMain} href="#main">
        Saltar al contenido
      </a>
      <Navigation />
    </header>
  );
};
