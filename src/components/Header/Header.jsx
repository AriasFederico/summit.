import { useContext, useEffect, useState} from 'react'
import './Header.scss'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { globalContext } from '../../context/globalContext'
import Aos from 'aos'
import { useNavigate } from 'react-router-dom'
import app from '../../services/firebase/credenciales'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(app)


export const Header = () => {
  
  const {nav, user} = useContext(globalContext);

  return (
    <header className='Header'>
      <div className='Wrapper'>
        <Logo/>
        <Hamburger/>
        {nav && <NavMobile/>}
        <Nav user={user}/>

      </div>
      <Outlet/>
    </header>
  )
}
// {user ? <p>{user}</p> : ''}

  // crear una funcion que contenga singout y navigate al home */}

export const Logo = () => {
  return (
    <h1 className='Header-h1'>
      <Link 
      className='Header-logo'
      to={'/'}>Summit</Link>  
    </h1>
  )
}

export const Nav = ({user}) => {

  const navigate = useNavigate()

  const signOutUser = () => {
    signOut(auth);
    navigate('/')
  }

  return (
    <nav className='Header-nav'>
      {
        user 
        ?  <ul className='Header-ul'>
            <li className='Header-li'>
              {user}
            </li>
            <li className="Header-li">
              <Link to={'/dashboard'} className='Header-link-pc'>Centro de control</Link>
            </li>
            <li className='Header-li'>
              <button onClick={()=> signOutUser()} className='Header-link-pc Header-register' to={'/register'}>Cerrar sesión</button>
            </li>
          </ul>
        : <ul className='Header-ul'>
            <li className="Header-li">
              <Link to={'/'} className='Header-link-pc'>Inicio</Link>
            </li>
            <li className='Header-li'>
              <Link className='Header-link-pc' to={'/login'}>Iniciar sesión</Link>
            </li>
            <li className='Header-li'>
              <Link className='Header-link-pc Header-register' to={'/register'}>Registrarse</Link>
            </li>
          </ul>

      }
    </nav>
  )
}

export const Hamburger = () => {
  const {nav, handleNav} = useContext(globalContext)

  return (
    <button className='Header-btn' onClick={handleNav}>
      {
        nav 
        ? <svg className='Header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
        : <svg  className='Header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      }
    </button>
  )
}

export const NavMobile = () => {
  useEffect(()=> {
    Aos.init()
  }, [])

  return(
    <nav className='Header-navmobile' data-aos={'zoom'}>
    </nav>
  )
}