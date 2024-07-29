import { useEffect } from 'react'
import './Banner.scss'
import Aos from 'aos'

import herramientas from '../../../../assets/banners/banner00.png'

export const Banner = () => {


  useEffect(()=> {
    Aos.init()
  },[])

  return (
    <section className='Banner' data-aos={'zoom-in'} data-aos-duration={200}>
      <div className="Banner-flex">
        <SpanBanner 
        span={'HERRAMIENTAS'}/>

        <TitleBanner 
        title={'Gestiona tu lista de precios y calcula márgenes'}/>

        <ParagraphBanner 
        paragraph={'Con nuestra app, podes usar las calculadoras de porcentajes para determinar tus márgenes de ganancias y mantener una lista organizada de tus precios. Ahorra tiempo y mejora la precisión!.'}/>

      </div>
      <Img img={herramientas} alt={'herramientas'}/>
    </section>
  )
}

export const TitleBanner = ({title}) => {
  return (
    <h3 className='Banner-h3'>
      {title}
    </h3>
  )
}

export const SpanBanner = ({span}) => {
  return (
    <span className='Banner-span'>
      {span}
    </span>
  )
}

export const ParagraphBanner = ({paragraph}) => {
  return (
    <p className='Banner-p'>
      {paragraph}
    </p>
  )
}

export const Img = ({img, alt}) => {
  return (
    <img
    className='Banner-img'
    src={img}
    alt={alt}
    />
  )
}