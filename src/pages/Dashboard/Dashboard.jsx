import { useLocation } from "react-router-dom";

export const Dashboard = () => {
  const location = useLocation();
  const state = location.state || {}; // Obtén el estado completo
  const { email } = state; // Accede a la propiedad 'email' si existe

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {email && <p>Logged in as: {email}</p>}
    </div>
  );
};


