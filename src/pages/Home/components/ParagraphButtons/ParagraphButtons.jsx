import './ParagraphButtons.css'
import { Link } from "react-router-dom"



export const ParagraphButtons = () => {
  return (
    <div className='paragraphbuttons' data-aos={'fade-up'}>
      <p className="paragraph-paragraphbuttons">Con Summit, llevar el control de tus precios y realizar cálculos precisos nunca ha sido tan fácil. Únete a nosotros y descubre cómo podemos simplificar tu vida y ayudarte a gestionar tus finanzas de manera más eficiente, todo de manera gratuita.</p>
      <div className="btns-container-paragraphbuttons">
        <Link to={'register'} className='link-default link-paragraphbuttons'>Comenzar</Link>
        <Link to={'login'} className='link-default link-paragraphbuttons link-paragraphbuttons-white'>Iniciar sesión</Link>
      </div>
    </div>
  )
}
