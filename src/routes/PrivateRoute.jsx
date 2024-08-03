import { useContext } from "react"
import { globalContext } from "../context/globalContext"
import { useNavigate, Navigate } from "react-router-dom"


export const PrivateRoute = ({children}) => {
  const {user} = useContext(globalContext)
  return user ? children : Navigate('/');
}
