import './Header.scss'
import { Outlet } from 'react-router-dom'

import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='Header'>
      <div className='Wrapper'>
        <Logo/>
        <Hamburger/>
        <Nav/>
      </div>
      <Outlet/>
    </header>
  )
}


export const Logo = () => {
  return (
    <h1 className='Header-h1'>
      <Link 
      className='Header-logo'
      to={'/'}>Summit</Link>  
    </h1>
  )
}

export const Nav = () => {
  return (
    <nav className='Header-nav'>
      <ul className='Header-ul'>
        <li className='Header-li'>
          <Link className='Header-link-pc' to={'/login'}>Iniciar sesión</Link>
        </li>
        <li className='Header-li'>
          <Link className='Header-link-pc Header-register' to={'/register'}>Registrarse</Link>
        </li>
      </ul>
    </nav>
  )
}

export const Hamburger = () => {
  return (
    <button className='Header-btn'>
      <svg  className='Header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
    </button>
  )
}