import { Cards } from "../Cards/Cards"
import './Functionalities.css'
import user from '../../../../assets/icons/user.svg'
import list from '../../../../assets/icons/list.svg'
import mobile from '../../../../assets/icons/mobile.svg'
import ui from '../../../../assets/icons/ui.svg'


export const Functionalities = () => {

  return (
    <div className="functionalities">
      <Cards icon={user} name={'Registro y acceso fácil'} aos={'fade-up'}
      paragraph={'Comienza rápidamente con un proceso de registro simple y acceso inmediato a todas las funcionalidades.'}
      />
      <Cards icon={list} name={'Gestión de lista de precios'} aos={'fade-up'}
      paragraph={'Mantén tus precios organizados y actualizados con facilidad para hasta 100 productos, y accede a ellos cuando lo necesites.'}
      />
      <Cards icon={mobile} name={'Adaptada al móvil'} aos={'fade-up'}
      paragraph={'Usa nuestra aplicación web desde cualquier dispositivo, asegurando una experiencia óptima en tu móvil.'}
      />
      <Cards icon={ui} name={'Interfaz intuitiva'} aos={'fade-up'}
      paragraph={'Navega y utiliza nuestra plataforma sin complicaciones gracias a su diseño intuitivo y fácil de usar.'}
      />
    </div>
  )
}
