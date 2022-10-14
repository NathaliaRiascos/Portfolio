import { useState, MouseEvent, ChangeEvent } from 'react'
import styles from './Form.module.css'
import emailjs from '@emailjs/browser'


const Form = () => {

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs.sendForm('service_9pe6xje', 'template_98ujsqb', e.target, 'xAHlbvaWXBdQmMKEZ')
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
  return (
    <form id={styles.form} onSubmit={handleSubmit}>
      <input 
        className={styles.input}
        type='text'
        name='name'
        placeholder='Nombre'
      />
      <input 
        className={styles.input}
        type='text'
        name='email'
        placeholder='Correo electronico'
      />
      <textarea 
        className={styles.textarea}
        name='message'
        placeholder='Escribe tu mensaje'
        rows={6}>
      </textarea>
      <input type='submit' value='Enviar mensaje' />
    </form>
  )
}

export default Form