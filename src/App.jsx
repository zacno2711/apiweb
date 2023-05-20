import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [datauser, setdatauser] = useState({
    fullName:'',
    username:'',
    password:'',
 })
 const handleChange = (e) => {
  e.preventDefault();
  setdatauser({...datauser,[e.target.name]: e.target.value});
  console.log(datauser);
 }
  return (
     <div className="container">
      <h1>actualizacion de usuarios con firebase - firestore</h1>
        <form>
          <div className="row">
            <div className="col">
              <label>Nombre Completo</label>
              <input
               type="text"
               placeholder='Nombre Completo'
               id="fullName"
               name="fullName"
               className="form-control"
               onChange={handleChange}
               value={datauser.fullName}
               />
            </div>
            <div className="col">
              <label>Username</label>
              <input
               type="text"
               placeholder='Username'
               id="fullName"
               name="fullName"
               className="form-control"
               onChange={handleChange}
               value={datauser.username}
               />
            </div>
           <div className="row">
           <div className="col">
              <label>Contraseña</label>
              <input
               type="text"
               placeholder='Contraseña'
               id="password"
               name="password"
               className="form-control"
               onChange={handleChange}
               value={datauser.password}
               />
            </div>
           </div>
            <div className="col"></div>
          </div>
          <button className='btn btn-success' style={{marginTop:10}}>agregar</button>
          <button className='btn btn-dark'style={{marginTop:10, marginLeft:10}}>Buscar</button>
          <button className='btn btn-warning'style={{marginTop:10, marginLeft:10}}>Actualizar</button>
          <button className='btn btn-danger'style={{marginTop:10, marginLeft:10}}>Eliminar</button>
        </form>
     </div>
  )
}

export default App
