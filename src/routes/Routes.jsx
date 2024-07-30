import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header/Header.jsx'
import { HomePage, Login, Register, Dashboard  } from '../pages'
import { GlobalData } from '../context/GlobalData.jsx'

export const AppRouter = () => {
  return (
    <GlobalData>
        <Routes>
          <Route path='/' element={<Header/>}>
          <Route index element={<HomePage/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          {/* crear una ruta con subrutas (lista,calculadora) dentro */}
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>      
      </Routes>
    </GlobalData>
  )
}
