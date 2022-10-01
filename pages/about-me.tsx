import type { NextPage } from 'next'
import stylesPanel from '../styles/Panel.module.css'

const About: NextPage = () => {
  return (
    <main className={stylesPanel.panel}>
      <header>
        <h1>About me</h1>
      </header>
      <section>
        <p>
          Soy estudiante de sistemas, una apasionada del desarrollo software.
          <br />
          Actualmente me encuentro inmersa en la maravillosa
          aventura del mundo del desarrollo web y estoy forjando mi camino como frontend developer.
        </p>
      </section>
    </main>
  )
}

export default About