import './Presentation.css'
import { Ticks } from '../Ticks/Ticks'
import tick from '../../../../assets/icons/tick.svg'
import { Link } from 'react-router-dom'
// import banner_presentation from '../../../../assets/banners/banner-presentation.jpg'
import banner_presentation from '../../../../assets/banners/hme.svg'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import { useEffect } from 'react'

export const Presentation = () => {

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div className='presentation'>
      <div className='presentation-h1-btn-container' data-aos='fade-right' data-aos-duration={900}>
        <h1 className='h1-presentation'>Gestiona tus precios, <span className='span-presentation'>maximiza</span> tus resultados.</h1>

        <div className="paragraph-presentation">Summit es una aplicación web gratuita e innovadora diseñada para facilitar la gestión y el cálculo de precios de manera rápida y eficiente.</div>

        <div className="ticks-container">
          <Ticks icon={tick} paragraph={'Gestión eficiente de precios'}/>
          <Ticks icon={tick} paragraph={'Cálculos precisos de ganancias y descuentos'}/>
          <Ticks icon={tick} paragraph={'Acceso desde cualquier dispositivo'}/>
        </div>


        <Link to={'register'} className='link-default link-presentation'>Comenzar</Link>
      </div>

      <img src={banner_presentation} className='banner-presentation-mobile' data-aos="zoom-in" data-aos-duration={900} />
    </div>
  )
}
