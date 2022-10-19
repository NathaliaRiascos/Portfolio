import type { NextPage } from 'next'
import Head from 'next/head'
import stylesPanel from '../styles/Panel.module.css'
import { Form } from '../components'

const Contact: NextPage = () => {
  return (
    <main className={stylesPanel.panel}>
      <Head>
        <title>Contacto</title>
      </Head>  
      <header>
        <h1>Contáctame</h1>
      </header>
      <section>
        <Form />
      </section>
    </main>
  )
}

export default Contact