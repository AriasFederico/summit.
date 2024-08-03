import { useState } from "react";
import app from '../../../services/firebase/credenciales'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);


export const useRegister = () => {

  const [condition, setCondition] = useState(false)
  const [exit, setExit] = useState(false)
  const [loading, setLoading] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Verifica si el nombre está vacío
    if (name.length === 0) return;
  
    // Verifica si la contraseña cumple con los requisitos
    if (password.length <= 7) {
      setCondition(true);
      setTimeout(() => {
        setCondition(false);
      }, 2000);
      return;
    }
  
    setLoading(true);
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false)
      setExit(true);
      resetForm();
  
      setTimeout(() => {
        setExit(false);
      }, 2000);
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      // Maneja el error (por ejemplo, mostrar un mensaje al usuario)
    } finally {
      setLoading(false);
      setCondition(false); // Asegúrate de resetear la condición en caso de éxito o error
    }
  }
  
  // mostrar un absolute con 'registro exitoso'


  return {
    condition,
    exit,
    name,
    email,
    password,
    handleChange,
    handleSubmit,
    loading
  }
}