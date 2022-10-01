import type { NextPage } from 'next'
import stylesPanel from '../styles/Panel.module.css'
import { Form } from '../components'

const Contact: NextPage = () => {
  return (
    <main className={stylesPanel.panel}>
      <header>
        <h1>Contact Me</h1>
      </header>
      <section>
        <Form />
      </section>
    </main>
  )
}

export default Contact