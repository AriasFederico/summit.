import { useState } from "react";

export const useRegister = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const {
    name,
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
      name, email, password
    )
  }


  return {
    name,
    email,
    password,
    handleChange,
    handleSubmit
  }
}