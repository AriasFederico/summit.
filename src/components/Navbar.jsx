import './styled-components/Navbar.css'
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom"
import { Logo } from "./Logo"
import { useComp } from './hooks/useComp'

import burguer from '../assets/icons/burguer-menu.svg'
import close_burguer from '../assets/icons/close-menu.svg'

export const Navbar = () => {


  const {
    nav,
    handleNav
  } = useComp();

  return (

    <>
      <header className="header">
        <nav className={nav ? 'nav active' : 'nav'}>
          <Logo/>
          {nav 
          ? <img src={close_burguer} className='burguer-menu' onClick={handleNav} />
          : <img src={burguer} className={'burguer-menu'} onClick={handleNav} />}
        </nav>

        <nav className='nav-pc'>
          <Logo/>

          <div className="user"></div>
          
          <div className="links-pc-container">
            <Link to={'login'} className='link-default login-pc'>Iniciar sesión</Link>
            <Link to={'register'} className='link-default link-pc register-pc'>Registrarse</Link>
          </div>
        </nav>

          <div className={nav ? 'nav-active-container' : 'nav-disable'}>
            <Link to={'register'} className='link-nav-active' onClick={handleNav}>Registrarse</Link>
            <Link to={'login'} className='link-nav-active' onClick={handleNav}>Iniciar sesión</Link>
          </div>
        
      </header>

      <Outlet/>
    </>
  )
}
