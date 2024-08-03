import Link from "next/link";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className="h-100 d-flex flex-column flex-shrink-0 p-3">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link href={`/dashboard`} className="nav-link">
            Perfil
          </Link>
        </li>
        <li>
          <Link href={`/dashboard/clients`} className="nav-link">
            Clientes
          </Link>
        </li>
        <li>
          <Link href={`/dashboard/clients`} className="nav-link">
            Mascotas
          </Link>
        </li>
        <li>
          <Link href={`/dashboard/clients`} className="nav-link">
            Vacunas
          </Link>
        </li>
        <li>
          <Link href={`/dashboard/clients`} className="nav-link">
            Productos
          </Link>
        </li>
      </ul>
      <hr />
      <ul className="dropdown-menu-dark text-small shadow">
        <li>
          <form action={`/dashboard/api`} method="post">
            <button className="btn btn-primary" type="submit">
              Cerrar Sesión
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
};
