import { useState } from "react"
import { globalContext } from "./globalContext"

export const GlobalData = ({children}) => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log(nav)
  }

  return (
    <globalContext.Provider value={{nav, handleNav}}>
      {children}
    </globalContext.Provider>
  )
}
