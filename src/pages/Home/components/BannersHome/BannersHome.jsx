import bannerCalculator from '../../../../assets/banners/bannerHome.png'
import { BannersParagraph } from '../../components/BannersParagraph/BannersParagraph'
import './BannersHome.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';



export const BannersHome = ({paragraph}) => {

  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div className="bannershome">
      <div className="banner-calculator">
        <img src={bannerCalculator} className='banner-bannershome' data-aos='zoom-in-left'/>
        <div className="title-span-paragraph-container">
          <h2 className='title-paragraph-banners'>Calculadoras Summit para la gestión de precios</h2>
          <div className="banners-paragraph-container">
            <BannersParagraph
            span={'Volumen y cantidad individual'}
            paragraph={'Calcula precios para productos en grandes volúmenes y cantidades individuales (e.g., bolsa de 25kg y por kg).'}
            />
            <BannersParagraph
            span={'Volumen y cantidad con ajustes'}
            paragraph={'Aplica aumentos o descuentos a precios de volumen e individual.'}
            />
            <BannersParagraph
            span={'Producto individual'}
            paragraph={'Establece precios específicos para productos individuales'}
            />
            <BannersParagraph
            span={'Producto individual con ajustes'}
            paragraph={'Ajusta precios de productos individuales con imcrementos'}
            />
          </div>
        </div>
      </div>

      <div className="banner-list">
        <img src={bannerCalculator} className='banner-bannershome'  data-aos='zoom-in-right'/>
        <div className="title-span-paragraph-container">
          <h2 className='title-paragraph-banners'>Gestiona tu lista de precios</h2>
          <div className="banners-paragraph-container">
            <BannersParagraph
            span={'Agrega precios calculados'}
            paragraph={'Añade productos a tu lista con sus datos (nombre, peso, precio por kg, precio total).'}
            />
            <BannersParagraph
            span={'Actualiza fácilmente'}
            paragraph={'Modifica los precios y detalles de tus productos cuando lo necesites'}
            />
            <BannersParagraph
            span={'Elimina sin complicaciones'}
            paragraph={'Mantén tu lista organizada eliminando productos obsoletos o incorrectos'}
            />
            <BannersParagraph
            span={'Busca rápidamente'}
            paragraph={'Encuentra el precio que buscas con nuestro buscador integrado'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
