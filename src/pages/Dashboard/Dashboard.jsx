import { useContext } from "react";
import { globalContext } from "../../context/globalContext";
import { Link,Outlet } from "react-router-dom";

export const Dashboard = () => {
  const {user} = useContext(globalContext)
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>{user}</p>
      <Link to={'calculators'}>Calculadora</Link>
      <Link to={'list'}>Listas</Link>



      <Outlet/>
    </div>
  );
};


