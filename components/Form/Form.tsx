import styles from './Form.module.css'

const Form = () => {
  return (
    <form id={styles.form}>
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