import { Navigation } from '@/components/Navigation';  /*en el componente hacer ctr + espacio y le agrega esta línea arriba*/
import styles from './page.module.css'


const getData = async () => {
  const response = await fetch('http://localhost:8000/api/');
  const result = response.json()
  return result
}

const Home = async () => {
  const data = await getData()
  console.log(data)

  return (
    <>
    <main id="main">
        <section className="  px-5 text-left d-flex" id="hero"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade  m-auto d-inline" data-bs-interval="1500" data-bs-ride="carousel">
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/grupo-6-g6/Img/LogoDark.png" className=" logo" alt=""/>
                            </div>
                            <div className="carousel-item">
                                <img src="/grupo-6-g6/Img/LogoLight.png" className=" logo" alt=""/>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <h1 className=" text-left py-5 ">My Pet</h1>
                        <h2 className=" h2Hero mt-2 fs-1 ">Sistema Integral de Gestión Veterinaria</h2>
                        <p className="mt-5 fs-4">Contá con la información de tus pacientes de manera rápida y confiable.<br/>
                            En cualquier lugar, en cualquier momento.</p>
                    </div>                   
                </div>
            </div>                 
        </section>

        <section className="d-flex py-3 " id="servicios">
            <div className="container mb-4 d-block align-self-center">

                <div className="servicios bg-white">
                    <div className="row servicio-fila">
                        <div className="col-lg-5 d-flex icono-wrap">
                            <div className="align-self-center text-center mx-auto p-5">
                                <img src="/grupo-6-g6/Img/IconoVetes.png" className="img-fluid imgVetDuenos" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-7 d-flex">
                            <div className="align-self-center p-5">
                                
                                <h2 className="display-4 fw-bold ms-4 ">Para Veterinarias</h2>
                                 
                                <p className="mx-4 mt-5 mb-2 fs-5">My Pet  es un sistema de gestión de historias clínicas para veterinarias, manteniendo un registro actualizado de los clientes y sus mascotas.<br/>
                                    La automatización de las historias clínicas permitirá al médico veterinario llevar un mayor control y seguimiento de las consultas y evolución de sus pacientes.<br/> 
                                    Permite llevar un registro de todo el tratamiento prescrito para cada mascota:</p>
                                <ul className="mb-5 fs-4 lista">
                                    <li className="elemLista">Medicación</li>
                                    <li className="elemLista">Estudios y procedimientos realizados</li>
                                    <li className="elemLista">Agenda de turnos.</li>
                                </ul>
                                
                                <a className="vinculos mx-4 my-5 text-center" href="#"> Ingreso para Veterinarias aquí</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            
            
                <div className="servicios  bg-white">
                    <div className="row servicio-fila">
                        <div className="col-lg-7 d-flex">
                            <div className="align-self-center p-5">
                                <h2 className="display-4 fw-bold m-4">Para Dueños</h2>
                                <p className="mx-4 mt-4 mb-5 fs-3">Bla bla bla explicar la App para dueños</p>
                                <a className="vinculos mx-4 my-5 text-center" href="#">Descargá la App para Dueños aquí</a>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex icono-wrap">
                            <div className="align-items-center text-center mx-auto me-5 p-5">
                                <img src="/grupo-6-g6/Img/IconoDueños.png" className="img-fuid imgVetDuenos" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
           
        <section id="contacto">
            <div className="container w-50 m-auto text-center" id="equipo">
                <h2 className="my-5 fs-2">Equipo pequeño con <span className="resaltado">resultados Grandes</span>.</h2>
                <p className="fs-4 ">Te presentamos al equipo detrás de My Pet</p>
            </div>
            
            <div className="mt-5 text-center pb-4">
                <img id="img-equipo" src="#" alt=""/>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-sm-3">
                            <h3>WALTER ONTIVERO</h3>
                            <h4>Desarrollador</h4>
                            <p>Contacto:</p>
                            <p><a href="#" aria-label="LinkedIn de Walter Ontivero"><img src="/grupo-6-g6/Img/LogoLinkedInP1.png" alt="" height="50" width="50"/></a></p>
                            <p><a href="https://github.com/wontivero" aria-label="GitHub de Walter Ontivero"><img src="/grupo-6-g6/Img/LogoGithubP1.png" alt="" height="50" width="50"/></a></p>
                            <p className="fw-bold">wontivero</p>
                        </div>
                        <div className="col-sm-3">
                            <h3>LORENA RODRIGUEZ</h3>
                            <h4>Desarrolladora</h4>
                            <p>Contacto:</p>
                            <p><a href="#" aria-label="LinkedIn de Lorena Rodriguez"><img src="/grupo-6-g6/Img/LogoLinkedInP1.png" alt="" height="50" width="50"/></a></p>
                            <p><a href="https://github.com/Mlrod" aria-label="GitHub de Lorena Rodriguez"><img src="/grupo-6-g6/Img/LogoGithubP1.png" alt="" height="50" width="50"/></a></p>
                            <p className="fw-bold">Mlrod</p>
                        </div>
                        <div className="col-sm-3">
                            <h3>GUADA PADIN ROJAS</h3>
                            <h4>Desarrolladora</h4>
                            <p>Contacto:</p>
                            <p><a href="#" aria-label="LinkedIn de Guada Padin Rojas"><img src="/grupo-6-g6/Img/LogoLinkedInP1.png" alt="" height="50" width="50"/></a></p>
                            <p><a href="https://github.com/GPRNomade" aria-label="GitHub de Guada Padin Rojas"><img src="/grupo-6-g6/Img/LogoGithubP1.png" alt="" height="50" width="50"/></a></p>
                            <p className="fw-bold">GPRNomade</p>
                        </div>
                        <div className="col-sm-3">
                            <h3>CAROLINA FERNÁNDEZ</h3>
                            <h4>Desarrolladora</h4>
                            <p>Contacto:</p>
                            <p><a href="#" aria-label="LinkedIn de Carolina Fernández"><img src="/grupo-6-g6/Img/LogoLinkedInP1.png" alt="" height="50" width="50"/></a></p>
                            <p><a href="https://github.com/Carofgit"  aria-label="GitHub de Carolina Fernandez"><img src="/grupo-6-g6/Img/LogoGithubP1.png" alt="" height="50" width="50"/></a></p>
                            <p className="fw-bold">Carofgit</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </main>

    
    </>
  );
}

export default Home;