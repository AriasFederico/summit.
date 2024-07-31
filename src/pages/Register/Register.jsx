import './Register.scss'
import { useEffect } from 'react'
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
    hiddePassword,
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
      <img src={banner} alt="" className='Register-banner' />    

      <form className="Register-form" onSubmit={handleSubmit}>
        
        <h2 className='Register-h2'>Registrarse</h2>

        <div className="Register-flex">
          <div className="Register-block">
            <label htmlFor="name" className='Register-label'>
              Nombre de tu negocio
              <input type='text' placeholder='Nombre' name='name' value={name} onChange={handleChange} className='Register-input'/>
            </label>
          </div>
          <div className="Register-block">
            <label htmlFor="email" className='Register-label'>
              Email 
              <input type='email' placeholder='Ejemplo@gmail.com' name='email' value={email} onChange={handleChange} className='Register-input'/>
            </label>
          </div>
          <div className="Register-block">
            <label htmlFor="password" className='Register-label'>
              Contraseña
              <div className="Register-passwordsvg">
                <input type={view ? 'text' : 'password'} placeholder='Mínimo 8 caracteres' name='password' value={password}  onChange={handleChange} className='Register-input'/>
                {
                  view 
                      ? <svg xmlns="http://www.w3.org/2000/svg" onClick={hiddePassword} width="16" height="16" fill="currentColor" className='Register-eye' viewBox="0 0 16 16">
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                      </svg>
                      : <svg xmlns="http://www.w3.org/2000/svg" onClick={showPassword} width="16" height="16" fill="currentColor" className='Register-eye' viewBox="0 0 16 16">
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                      </svg>
                }
              </div>
            </label>
          </div>

          <div className="Register-alert-cont">
            <button className='Register-btn-show' onClick={showAlert}>?</button>
            {
              alert && 
              <AlertRegister/>
            }
          </div>
        </div>

        <button type={'submit'} className='Register-btn'>Registrarse</button>
        <Link to='/login' className='Register-login-btn'>Ya tengo una cuenta</Link>

      </form>
    </div>
  )
}


export const AlertRegister = () => {

  useEffect(() => {
    Aos.init()
  },[])

  return (
    <div className="Register-alert" data-aos={'zoom-in'}>
        <p className='Register-alert-p'>Por favor, utiliza un correo electrónico real y válido. Este será necesario para recibir comunicaciones importantes, incluyendo la posibilidad de restablecer tu contraseña en caso de que la olvides.</p>
    </div>
  )
}

// minimo 8 caracteres en el palceholder