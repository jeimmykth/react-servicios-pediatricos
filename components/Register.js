import Layout from '../components/Layout';


const Sigin = () => (

      <div>
          
            
        <h1>FORMULARIO INSCRIPCION</h1>
        <div>
          <fieldset>
            <legend>Datos personales</legend>
              <p>Nombre: 
                  <input type="text" name="nombre" required/></p>
              <p>Direccion: 
                  <input type="text" name="direccion" required/></p>
              <p>Telefono: 
                  <input type="text" name="telefono" required/></p>
              <p>Email: 
                <input type="text" name="email" required/></p>
              <p>Contraseña:
                  <input type="password" name="password" minlength="6"/></p>
          </fieldset>
        </div>

        <div>
          <input type="button" value="DOCTOR"></input>
            <h3>***   Si decea trabajar con nosotros oprima DOCTOR y diligenicie los siguientes campos  ***</h3>
              <textarea name="texto" rows="4" cols="40">Escriba una descripcion de su perfil profesional</textarea>
              <input type="file" name="seleccione HV"></input>

            <h3>***    De lo contrario opima crear   ***</h3>
            <input type="submit" value="Crear" disabled></input>
            <input type="submit" value="Eliminar" disabled></input>
            <input type="submit" value="Modificar" disabled></input>
        </div>
    
      </div>
    
  );    
  export default Sigin;