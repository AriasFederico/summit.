import { useState } from "react"

export const useComp = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return {
    nav,
    handleNav
  }
}
