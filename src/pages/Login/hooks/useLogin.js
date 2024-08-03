import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import app from '../../../services/firebase/credenciales'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);


export const useLogin = () => {
  
  const [bad, setBad] = useState(false);
  const navigate = useNavigate();

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
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password); 
      
      navigate('/dashboard', { 
        replace: true, 
        state: { logged: true } 
      });

    } catch (error) {
      console.log('Error al inciar sesión:', error);
      setBad(true)
    }
    

    setTimeout(() => {
      setBad(false)
    }, 2000)

  }



  return {
    email,
    password,
    handleChange,
    handleSubmit,
    bad
  }
}