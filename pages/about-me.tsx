import type { NextPage } from 'next'

import { Item } from 'components'

import stylesPanel from 'styles/Panel.module.css'
import styles from 'styles/About.module.css'

import {
  Typescript,
  Git,
  Firebase,
  Html,
  Css,
  Javascript,
  ReactIcon
} from 'helpers/icons'

const About: NextPage = () => {
  return (
    <main className={stylesPanel.panel}>
      <header>
        <h1>About me</h1>
      </header>
      <section>
        {/* <p>
          Hello, I’m Nathalia Riascos, a System information technology student at the Universidad del Valle.
          <br />
          From the beginning of my career I had a great interest in user interfaces,
          all the interaction that the user can have with it, 
          I ended up finding something that I love doing which has led me to enter 
          the world of web development specializing in Frontend development.
          <br/>
          I’ve been learning React Js and Typescript on the fly to continue growing as a professional.
        </p> */}
        <p>Hello, I’m Nathalia Riascos, a System information technology student at the Universidad del Valle.
          Desde inicios de mi carrera tuve un gran interés por las interfaces de usuario, porque éstas fueran agradables e intuitivas. Al final acababa diseñando y desarrollando el “frontend” de los proyectos que hacía con mis compañeros en la U aún sin saber que existía este rol en el mundo del desarrollo web.
          Cuando descubrí este mundo web hace dos años, comencé aprendiendo por curiosidad y poco a poco me fui sumergiendo más. Terminé encontrando algo que me encanta hacer y en cual me estoy especializando que es el desarrollo Frontend.
          He ido aprendiendo poco a poco sobre la marcha UX/UI y las siguientes tecnologías:
        </p>
      </section>
      <section className={styles.skills}>
        <h2>Skills</h2>
        <ul className={styles.container__skills}>
          <Item text='HTML'>
            <Html aria-label='Typescript icon'/>
          </Item>
          <Item text='CSS'>
            <Css aria-label='Typescript icon'/>
          </Item>
          <Item text='JavaScript'>
            <Javascript aria-label='Typescript icon'/>
          </Item>
          <Item text='React Js'>
            <ReactIcon aria-label='Typescript icon'/>
          </Item>
          <Item text='Typescript'>
            <Typescript aria-label='Typescript icon'/>
          </Item>
          <Item text='Git'>
            <Git aria-label='Git icon'/>
          </Item>
          <Item text='Firebase'>
            <Firebase aria-label='Firebase icon'/>
          </Item>
        </ul>
      </section>
    </main>
  )
}

export default About