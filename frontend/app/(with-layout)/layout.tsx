import { Navigation } from "@/components/Navigation";

const Layout = ({ children }: any) => {
    return (
        <>
        <header>
        <a className="skip-main" href="#main">Saltar al contenido</a>
        <Navigation/>
    </header>
            {children}
        
        <footer className="w-100  d-flex  align-items-center justify-content-center flex-wrap">
            <p className="fs-5 px-3  pt-3">My Pet. &copy; Todos Los Derechos Reservados 2021</p>
            <a className="contactatefooter mx-3 fs-5" href="#">Contactate con nosotros</a>
            <div id="iconos">
                <a href="#" aria-label="Visita nuestra página de Facebook aquí"><img id="iconos" src="/grupo-6-g6/Img/LogoFaceP1.png" alt=""/></a>
                <a href="#" aria-label="Visita nuestro perfil de Instagram aquí"><img id="iconos" src="/grupo-6-g6/Img/LogoInstaP1.png" alt=""/></a>
                <a href="#" aria-label="Escribinos a nuestro Whastapp aquí"><img id="iconos" src="/grupo-6-g6/Img/LogoWhatsP1.png" alt=""/></a>
                <a href="#" aria-label="Mandanos un mail aquí"><img id="iconos" src="/grupo-6-g6/Img/LogoMailP1.png" alt=""/></a>
            </div>
          </footer>

    
        </>
    )
}

export default Layout;