import { useState,useEffect } from "react"
import { globalContext } from "./globalContext"
import { useNavigate } from "react-router-dom"

import { getAuth, onAuthStateChanged } from "firebase/auth"
import app from '../services/firebase/credenciales'
const auth = getAuth(app);

export const GlobalData = ({children}) => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log(nav)
  }

  const [user, setUser] = useState(null);

  useEffect(()=> {
    const verify = onAuthStateChanged(auth, (userFire) => {
      if(userFire) {
        setUser(userFire.email)
      }else {setUser(null)}
    })
    

    return ()=> verify();
  }, [])




  return (
    <globalContext.Provider value={{nav, handleNav, user}}>
      {children}
    </globalContext.Provider>
  )
}
