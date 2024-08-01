import './Register.scss'
import { useContext, useEffect } from 'react'
import Aos from 'aos'
import banner from '../../assets/banners/register.svg'
import { useView } from './hooks/useView'
import { useRegister } from './hooks/useRegister'
import { useAlert } from './hooks/useAlert'
import { Link } from 'react-router-dom'

export const Register = () => {

  useEffect(()=>{
    Aos.init()
  },[])

  const {
    view,
    showPassword,
    hiddePassword
  } = useView()

  const {
    name,
    email,
    password,
    handleChange,
    handleSubmit
  } = useRegister()

  const {
    alert,
    showAlert
  } = useAlert()

  return (
    <div className="Register" data-aos={'zoom'}>
      <img src={banner} alt={'registrarse'} className='Register-img' />

      <form className="Register-form" onSubmit={handleSubmit}>
        <h2 className='Register-h2'>Registra tu negocio !</h2>
        <label htmlFor="name" className='Regis2er-label'>
          <input type="text" name='name' placeholder='Nombre de tu negocio' onChange={handleChange} value={name}  className='Register-input'/>
        </label>

        <label htmlFor="email" className='Register-label'>
          <input type="email" name='email' placeholder='Ingresa tu email' onChange={handleChange} value={email}  className='Register-input'/>
          <AlertRegister alert={alert} showAlert={showAlert}/>
        </label>

        <label htmlFor="password" className='Register-label'>
          <input type={view ? 'text' : 'password'} name='password' placeholder='********' onChange={handleChange} className='Register-input' value={password}/>
          <EyePassword view={view} showPassword={showPassword} hiddePassword={hiddePassword}/>
        </label>

        <button type='submit' className='Register-submit'>Registrarse</button>

        <div className="Register-login">
          <Link type='submit' to='/login' className='Register-loginbtn'>Ya tengo cuenta</Link>          
        </div>
      </form>
    </div>
    )
  }

export const AlertRegister = ({alert, showAlert}) => {

  useEffect(() => {
    Aos.init()
  },[])

  return (
    <div className='Register-alert'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='Register-svg' viewBox="0 0 16 16" onClick={showAlert}>
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg>
      {
        alert && 
        <p className='Register-message' data-aos={'zoom'}>
          Por favor, utiliza un correo electrónico real y válido. Este será necesario para recibir comunicaciones importantes, incluyendo la posibilidad de restablecer tu contraseña en caso de que la olvides.
        </p>
      }
    </div>
  )
}

export const EyePassword = ({ view, showPassword, hiddePassword }) => {
  
  return (
    <>
      {view 
      ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='Register-svg' viewBox="0 0 16 16" onClick={hiddePassword}>
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
        </svg>
      : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='Register-svg' viewBox="0 0 16 16" onClick={showPassword}>
          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
        </svg>
      }
    </>
  )
}


// 