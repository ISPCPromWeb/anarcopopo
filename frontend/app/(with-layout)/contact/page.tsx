import Image from "next/image";
import styles from "./page.module.css";


const Contact = () => {
  return (
    
    <main>
      <section>
        <div className="jumbotron text-left">
          <div className="container-fluid bg-grey">
            <h2 className="text-center">CONTACTÁ CON NOSOTROS</h2>
            <div className="row">
              <div className="col-sm-5">
                <p>
                  MyPet es un sistema de Gestión Integral desarrollado pensando
                  exclusivamente en las necesidades de las veterinarias. Con
                  este sistema podrás gestionar clientes, historias clínicas,
                  calendarios de vacunación, turnos, de manera más ordenada y
                  eficiente. Por dudas, consultas, o simplemente para solicitar
                  más información contactanos!!! Te responderemos en un plazo de
                  24 horas.
                </p>
              </div>

              <textarea className="form-control" id="comments" name="comments" placeholder="Mensaje..."
                rows={5}></textarea><br/>
              <div className="row">
                <div className="col-sm-12 form-group">
                  <a className="vincnav btn" href="#">Enviar</a>
                </div>
                <form action="/layout">
                  <button                  
                    type="button"
                    
                    className="btn vincnav w-100">                 
                    Iniciar Sesión
                  </button>
                </form>
              <div className="col-sm-7">
                <form action="/cotactoConsulta" method="POST" encType="multipart/form-data">
                  <div className="row">
                    <div className="col-sm-6 form-group">
                      <input
                        className="form-control"
                        id="txtNombre"
                        name="txtNombre"
                        placeholder="Nombre"
                        type="text"
                        aria-label="Ingresa tu nombre"
                        required
                      />
                    </div>
                    <div className="col-sm-6 form-group">
                      <input
                        className="form-control"
                        id="txtEmail"
                        name="txtEmail"
                        placeholder="Email"
                        type="email"
                        aria-label="Ingresa tu correo electronico"
                        required
                      />
                    </div>
                  </div>
                  <textarea
                    className="form-control mt-3"
                    id="txtMensaje"
                    name="txtMensaje"
                    aria-label="Ingresa tu mensaje"
                    placeholder="Mensaje..."
                    rows={5}
                  />

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
          
    </main>

  );
}

export default Contact;