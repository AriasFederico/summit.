import { useState } from "react"

export const useAlert = () => {


  const [alert, setAlert ] = useState(false)

  const showAlert = () => {
    setAlert(!alert);
  }


  return {
    alert,
    showAlert
  }
}
