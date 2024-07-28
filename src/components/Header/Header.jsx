import './Header.scss'
import { Outlet } from 'react-router-dom'

import { Link } from 'react-router-dom'
import hamburguer from '../../assets/icons/burguer-menu.svg'

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
      <img className='Header-svg' src={hamburguer} alt='menu' />
    </button>
  )
}