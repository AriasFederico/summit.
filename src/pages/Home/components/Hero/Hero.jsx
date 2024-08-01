import './Hero.scss'
import Aos from 'aos'
import { useEffect } from 'react'

import { Link } from "react-router-dom"

export const Hero = () => {

  useEffect(()=> {
    Aos.init()
  },[])

  return (
    <main className='Hero' data-aos='zoom'>
      <h2 className={'Hero-h2'}>Gestiona tus precios, <span className='Hero-span'>maximiza</span> tus ganancias</h2>
      <p className='Hero-p'>Summit es una aplicación web gratuita e innovadora diseñada para facilitar la gestión y el cálculo de precios de manera rápida y eficiente</p>
      <div className='Hero-ticks'>
        <Tick value={'Gestión eficiente de precios'}/>
        <Tick value={'Cálculos precisos de ganancias y descuentos'}/>
        <Tick value={'Acceso desde cualquier dispositivo'}/>
      </div>
      <Boton name={'Comenzar'} href={'/register'}/>
    </main>
  )
}

export const Boton = ({name, href}) => {
  return (
    <Link className='Hero-btn' to={href}>{name}</Link>
  )
}

export const Tick = ({value}) => {
  return (
    <div className='Hero-tick'>
      <svg xmlns="http://www.w3.org/2000/svg" className='Hero-sv' width="16" height="16" fill='currentColor'  viewBox='0 0 16 16'>
      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'/>
      </svg>
      <p className='Hero-p-tick'>{value}</p>
    </div>
  )
}