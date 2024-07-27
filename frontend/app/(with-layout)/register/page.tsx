"use client"
import Image from "next/image";
import styles from "./page.module.css";



const Register = () => {
  return (
    <>
<main className="body-dark bg-gray">
  <div className="container">
    
    <div className={`${styles.row}`}>
      <div className="col-md-12">
        <h2 className="display-6 mt-6"> Datos de Clientes</h2>
        <hr className=" bg-primary pt-0 mt-0 "/> 
        <p>Ingresa los datos para crear un nuevo Cliente</p>

        <form className={`${styles.row} g-3 pt-4 mt-4`}>
          <div className=" col-md-4 ">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" name="nombre" id="nombre" required/>
          </div>
          <div className="col-md-4">
            <label htmlFor="apellido" className="form-label">Apellido</label>
            <input type="text" className="form-control gx-4" name="apellido" id="apellido" required/>
          </div>

          <div className="col-md-3">
            <label htmlFor="dni" className="form-label">DNI (sin puntos)</label>
            <input type="text" className="form-control" name="dni" id="dni" placeholder="12345678" pattern="[0-9]{8}" required/>
          </div>

          <div className="col-md-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" placeholder="ejemplo@gmail.com" id="email" required/>
          </div>

          <div className="col-md-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" id="password" placeholder="6 caracteres" pattern="[0-9]{6}"  required/>
          </div>
         
        
          <div className="col-12 pt-4 mt-4">
            <a className={`${styles.btn} btn-primary`} type="button" data-bs-toggle="collapse" href="#formMascota" role="button" aria-expanded="false" aria-controls="formMascota">Agregar Mascota</a>
          </div>
          

        {/* <!-- FORMULARIO MASCOTAS OCULTO --> */}
          <div className="container collapse" id="formMascota">
          
            <div className={`${styles.row}`}>
              <div className="col-md-12">
                <h2 className="display-6 mt-6"> Datos de Mascotas</h2>
                <hr className=" bg-primary pt-0 mt-0 "/>
                <p>Ingresa los datos para crear una nueva Mascota</p>
        
                <form className={`${styles.row} g-3 pt-4 mt-4`}>
                  <div className="col-md-5">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" required/>
                  </div>
                  
                  <div className="col-md-12">        
                  </div>
                  <div className="col-md-2">
                    <label htmlFor="edad" className="form-label">Edad</label>
                    <input type="number" className="form-control" id="edad" required/>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="categoria" className="form-label">Tipo de Mascota</label>
                    <select className="form-select" id="categoria" name="categoria" required>
                      <option selected disabled value="">...</option>
                      <option>Perro</option>
                      <option>Gato</option>
                    </select>
                  </div>
                  

                  <div className="col-md-4">
                    <label htmlFor="raza" className="form-label">Raza</label>
                    <input type="text" className="form-control" id="raza" required/>
                  </div>
                                  
                  <div className="col-12 pt-4 mt-4">
                    <button className="btn btn-primary" type="submit" onClick={()=>console.log("guardarMascota")}>Guardar Mascota</button>
                  </div>
                </form>  
              </div>
            </div>
          </div>
 
{/* <!-- Acá termina el form Mascota --> */}
          <div className="col-12 pt-4 mt-4">
            <button className={`${styles.btn} btn-primary`} type="submit" >Guardar</button>
          </div>  
          
        </form>
      </div>
    </div>
  </div>
      
      


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
        crossOrigin="anonymous"></script>

  </main>
  </>
  );
}

export default Register;