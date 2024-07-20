import { useState } from "react"

export const useFormMessage = () => {

  const [valueForm, setValueForm] = useState({
    name:'',
    email:'',
    // message: textarea
  })

  const [textValue, setTextValue] = useState('')

  const handleChange = (e) => {
    const {name, value} = e.target;

    setValueForm({
      ...valueForm,
      [name]:value
    });

  }
  
  const handleComment = (e) => {
    setTextValue(e.target.value)
    console.log('asdasd')
  }


  return {
    handleChange,
    valueForm,
    textValue,
    handleComment
  }
}
