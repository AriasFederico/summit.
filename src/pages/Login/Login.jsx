import './Login.scss'
import { Link } from 'react-router-dom'
import { useLogin } from './hooks/useLogin'
import { EyePassword } from '../Register/Register'
import { useView } from '../Register/hooks/useView'

import banner from '../../assets/banners/login.svg'

export const Login = () => {

  const {
    view,
    showPassword,
    hiddePassword
  } = useView()

  const {
    email,
    password,
    handleChange,
    handleSubmit
  } = useLogin()


  return (
    <div className="Login">
      <div className="Login" data-aos={'zoom'}>
        <img src={banner} alt={'registrarse'} className='Login-img' />

        <form className="Login-form" onSubmit={handleSubmit}>
          <h2 className='Login-h2'>Iniciar sesión</h2>
          <label htmlFor="email" className='Login-label'>
            <input type="email" name='email' placeholder='Ingresa tu email' onChange={handleChange} value={email}  className='Login-input'/>
          </label>

          <label htmlFor="password" className='Login-label'>
            <input type={view ? 'text' : 'password'} name='password' placeholder='********' onChange={handleChange} className='Login-input' value={password}/>
            <EyePassword view={view} showPassword={showPassword} hiddePassword={hiddePassword}/>
          </label>

          <p>Usar este parrafo como error</p>

          <button type='submit' className='Login-submit'>Iniciar sesión</button>

          <div className="Login-login">
            <Link type='submit' to='/login' className='Login-loginbtn'>¿Olvidaste tu contraseña?</Link>          
          </div>
        </form>
      </div>
    </div>
  )
}

