import styles from './Form.module.css'

const Form = () => {
  return (
    <form id={styles.form}>
      <input 
        className={styles.input}
        type='text'
        name='name'
        placeholder='Name'
      />
      <input 
        className={styles.input}
        type='text'
        name='email'
        placeholder='Email'
      />
      <textarea 
        className={styles.textarea}
        name='message'
        placeholder='Message'
        rows={6}>
      </textarea>
      <input type='submit' value='Send Message' />
    </form>
  )
}

export default Form