import { useState } from "react";

export const useLogin = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const {
    email,
    password
  } = formData

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    // logica para cuando no se cumplen los 8 caracteres de la contraseña
    e.preventDefault()
    console.log(
      email, password
    )
    
    setBad(true)

    setTimeout(() => {
      setBad(false)
    }, 2000)


  }

  const [bad, setBad] = useState(false);


  return {
    email,
    password,
    handleChange,
    handleSubmit,
    bad
  }
}