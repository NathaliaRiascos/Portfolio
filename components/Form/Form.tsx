import { useState, MouseEvent, ChangeEvent } from 'react'
import styles from './Form.module.css'
import { ToastContainer, toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

interface Error {
  nombre: string,
  correo: string,
  mensaje: string
}

const initialState = {
  nombre: '',
  correo: '',
  mensaje: ''
}
const Form = () => {

  const [errors, setErrors] = useState<Error>(initialState)


  const validate = (e: MouseEvent<HTMLFormElement>) => {
    const data = Object.fromEntries(new FormData(e.target))

    const tempErrors = {}
    const text = 'no puede estar vacio'
    for (let key in data) {
      if (!data[key]) tempErrors[key] = `Por favor digita tu ${key}, ${text}`
    }

    setErrors(tempErrors)
  }

  const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    validate(e)
    if (Object.keys(errors).length === 0) return
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        e.target, 
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      toast('Correo enviado con éxito')
      
    } catch (e) {
      console.log(e)
      toast('El correo no pudo ser enviado, intenta nuevamente')
    }
  }
  return (
    <>
      <form id={styles.form} onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input}
            type='text'
            name='nombre'
            placeholder='Nombre'
          />
          {errors.nombre}
        </div>
        <div>
          <input
            className={styles.input}
            type='text'
            name='correo'
            placeholder='Correo electronico'
          />
          {errors.correo}
        </div>
        <div>
          <textarea
            className={styles.textarea}
            name='mensaje'
            placeholder='Escribe tu mensaje'
            rows={6}
          >
          </textarea>
          {errors.mensaje}
        </div>
        <input type='submit' value='Enviar mensaje' />
      </form>
      <ToastContainer />
    </>
  )
}

export default Form