import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header/Header.jsx'
import { HomePage, Login, Register, Dashboard  } from '../pages'
import { GlobalData } from '../context/GlobalData.jsx'
import { PrivateRoute } from './PrivateRoute.jsx'
import { Outlet } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <GlobalData>
        <Routes>
          <Route path='/' element={<Header/>}>
          <Route index element={<HomePage/>}/>
          <Route path='dashboard' element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>    
      </Routes>
    </GlobalData>
  )
}
