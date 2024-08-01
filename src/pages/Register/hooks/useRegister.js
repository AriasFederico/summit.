import { useState } from "react";

export const useRegister = () => {

  const [condition, setCondition] = useState(false)
  const [exit, setExit] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const resetForm = () => {
    setFormData({
      name:'',
      email:'',
      password:''
    })
  }

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
    e.preventDefault()
    
    // logica para cuando no se cumplen los 8 caracteres de la contraseña

    if (name.length == 0) return

    if (password.length <= 7 ) {
      setCondition(true);
      setTimeout(() => {
        setCondition(false)
      }, 2000)   
      return
    }

    
    setExit(true)
    resetForm()
    
    setTimeout(() => {
      setExit(false);
    }, 2000)

    setCondition(false)

  }


  return {
    condition,
    exit,
    name,
    email,
    password,
    handleChange,
    handleSubmit
  }
}