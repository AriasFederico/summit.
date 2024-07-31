import { useState } from "react"

export const useView = () => {

  const [view, setView] = useState(false)

  const showPassword = () => {
    setView(true)
  }

  const hiddePassword = () => {
    setView(false)
  }

  return {
    view,
    showPassword,
    hiddePassword
  }
}
