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
      <div className="Register" data-aos={'zoom'}>
        <img src={banner} alt={'registrarse'} className='Register-img' />

        <form className="Register-form" onSubmit={handleSubmit}>
          <h2 className='Register-h2'>Iniciar sesión</h2>
          <label htmlFor="email" className='Register-label'>
            <input type="email" name='email' placeholder='Ingresa tu email' onChange={handleChange} value={email}  className='Register-input'/>
          </label>

          <label htmlFor="password" className='Register-label'>
            <input type={view ? 'text' : 'password'} name='password' placeholder='********' onChange={handleChange} className='Register-input' value={password}/>
            <EyePassword view={view} showPassword={showPassword} hiddePassword={hiddePassword}/>
          </label>

          <button type='submit' className='Register-submit'>Iniciar sesión</button>

          <div className="Register-login">
            <Link type='submit' to='/login' className='Register-loginbtn'>¿Olvidaste tu contraseña?</Link>          
          </div>
        </form>
      </div>
    </div>
  )
}

