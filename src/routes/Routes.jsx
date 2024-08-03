import { Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header/Header.jsx';
import { HomePage, Login, Register, Dashboard } from '../pages';
import { GlobalData } from '../context/GlobalData.jsx';
import { PrivateRoute } from './PrivateRoute.jsx';
import { Calculators } from '../pages/Calculators/Calculators.jsx';
import { List } from '../pages/List/List.jsx';

export const AppRouter = () => {
  return (
    <GlobalData>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path='dashboard' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }>
            <Route path='calculators' element={<Calculators />} />
            <Route path='list' element={<List/>} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </GlobalData>
  );
};
