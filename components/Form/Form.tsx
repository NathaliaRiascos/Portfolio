import { useState, MouseEvent, ChangeEvent, SyntheticEvent, useRef } from 'react'
import styles from './Form.module.css'
import { ToastContainer, toast } from 'react-toastify'
import emailjs from '@emailjs/browser'

// type Error = {
//   nombre?: string,
//   correo?: string,
//   mensaje?: string
// }


interface Error {
  [key: string]: string;
}

const initialState = {
  nombre: '',
  correo: '',
  mensaje: ''
}
const Form = () => {

  const [errors, setErrors] = useState<Error>(initialState)
  const form = useRef()

  const tempErrors: Error = {}
  const validate = (e: SyntheticEvent) => {
    const data = Object.fromEntries(new FormData(e.target as HTMLFormElement))

    const tempErrors: Error = {}
    const text = 'no puede estar vacio'
    for (let key in data) {
      if (!data[key]) tempErrors[key] = `Por favor digita tu ${key}, ${text}`
    }

  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    validate(e)
    if (Object.keys(tempErrors).length !== 0) {
      setErrors(tempErrors)
      return
    }


    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        form.current, 
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
      <form ref={form} id={styles.form} onSubmit={handleSubmit}>
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