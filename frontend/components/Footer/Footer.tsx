import styles from "./Footer.module.css"

export const Footer =()=>{
    return(
    <footer>
      <footer
        className="w-100 d-flex align-items-center justify-content-center flex-wrap"
      >
        <p className="fs-5 px-3 pt-3">
          My Pet. &copy; Todos Los Derechos Reservados 2024
        </p>
        <a className={`${styles.contactatefooter} mx-3 fs-5`} href="#"
          >Contactate con nosotros</a>
        <div id="iconos">
          <a href="#" aria-label="Visita nuestra página de Facebook aquí"
            ><img id="iconos" src="../static/Img/LogoFaceP1.png" alt=""
          /></a>
          <a href="#" aria-label="Visita nuestro perfil de Instagram aquí"
            ><img id="iconos" src="../static/Img/LogoInstaP1.png" alt=""
          /></a>
          <a href="#" aria-label="Escribinos a nuestro Whastapp aquí"
            ><img id="iconos" src="../static/Img/LogoWhatsP1.png" alt=""
          /></a>
          <a href="#" aria-label="Mandanos un mail aquí"
            ><img id="iconos" src="../static/Img/LogoMailP1.png" alt=""
          /></a>
        </div>
      </footer>
    </footer>
    )
}