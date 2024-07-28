// import { productsApi } from "@/api/products";

import styles from "./page.module.css";

const ServiceSection = async () => {
  return (
    <div className={`${styles.servicios} bg-white`}>
      <div className={`row ${styles.servicioFila}`}>
        <div className="col-lg-5 d-flex icono-wrap">
          <div className="align-self-center text-center mx-auto p-5">
            <img
              src="/grupo-6-g6/Img/IconoVetes.png"
              className={`img-fluid ${styles.imgVetDuenos}`}
              alt=""
            />
          </div>
        </div>

        <div className="col-lg-7 d-flex">
          <div className="align-self-center p-5">
            <h2 className="display-4 fw-bold ms-4 ">Para Veterinarias</h2>

            <p className="mx-4 mt-5 mb-2 fs-5">
              My Pet es un sistema de gestión de historias clínicas para
              veterinarias, manteniendo un registro actualizado de los clientes
              y sus mascotas. La automatización de las historias clínicas
              permitirá al médico veterinario llevar un mayor control y
              seguimiento de las consultas y evolución de sus pacientes. Permite
              llevar un registro de todo el tratamiento prescrito para cada
              mascota:
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

            <a className={`${styles.vinculos} mx-5 my-5 text-center`} href="#">
              {" "}
              Ingreso para Veterinarias aquí
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
