import './LastParagraph.scss'
import { SpanBanner } from '../Banners.jsx/Banner'
import { Link } from 'react-router-dom'

export const LastParagraph = () => {
  return (
    <div className='LastParagraph'>
      <SpanBanner span={'¿ Listo para comenzar ?'}/>
      <h6 className='LastParagraph-h6'>Lleva el control total de tus precios</h6>
      <p className='LastParagraph-p'>Con Summit, lleva el control de tus precios, optimiza tus márgenes de ganancia y simplifica la gestión de tu negocio. Disfruta de una plataforma fácil de usar, diseñada para adaptarse a tus necesidades y ayudarte a alcanzar tus objetivos. ¡Anímate a empezar y descubre cómo Summit puede transformar tu negocio!</p>
      <Link className='LastParagraph-a' to={'/register'}>Comenzar</Link>
    </div>
  )
}
