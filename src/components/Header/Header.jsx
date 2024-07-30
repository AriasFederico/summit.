import { useContext, useEffect } from 'react'
import './Header.scss'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { globalContext } from '../../context/globalContext'
import Aos from 'aos'


export const Header = () => {

  const {nav} = useContext(globalContext);

  return (
    <header className='Header'>
      <div className='Wrapper'>
        <Logo/>
        <Hamburger/>
        {nav && <NavMobile/>}
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
  const {nav, handleNav} = useContext(globalContext)

  return (
    <button className='Header-btn' onClick={handleNav}>
      {nav 
      ? <svg className='Header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
       </svg>
      : <svg  className='Header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>}
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