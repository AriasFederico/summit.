import './Login.scss'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useLogin } from './hooks/useLogin'
import { EyePassword } from '../Register/Register'
import { useView } from '../Register/hooks/useView'
import { globalContext } from '../../context/globalContext'

import banner from '../../assets/banners/login.svg'
import { useContext, useEffect } from 'react'

export const Login = () => {
  const {user} = useContext(globalContext);
  const redirect = useNavigate();


  useEffect(() => {
    if (user) {
      redirect('/');
    }
  }, [user, redirect]);

  const {
    view,
    showPassword,
    hiddePassword
  } = useView()

  const {
    email,
    password,
    handleChange,
    handleSubmit,
    bad
  } = useLogin()

  if (user) {
    return null; // O puedes mostrar un mensaje o un loader
  }

  return (
    <div className="Login" >
      <div className="Login">
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

          <p className={bad ? 'Login-bad-active' : 'Login-bad'}>Email o contraseña incorrectas</p>

          <button type='submit' className='Login-submit'>Iniciar sesión</button>

          <div className="Login-login">
            <Link type='submit' to='/login' className='Login-loginbtn'>¿Olvidaste tu contraseña?</Link>          
          </div>
        </form>
      </div>
    </div>
  )
}

