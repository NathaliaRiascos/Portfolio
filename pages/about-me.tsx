import type { NextPage } from 'next'
import Image from 'next/image'

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
          <h1>Sobre mí</h1>
        </header>
        
        <section>
          <div className={styles.container__info}>
          <p>Hola, Soy Nathalia Riascos, una estudiante de Universidad del Valle.<br />
            Desde inicios de mi carrera tuve un gran interés por las interfaces de usuario,
            porque éstas fueran agradables e intuitivas. 
            Al final acababa diseñando y desarrollando el “frontend” de los proyectos que hacía con mis compañeros en la U 
            aún sin saber que existía este rol en el mundo del desarrollo web.<br />
          </p>
          
            <Image
              src='/pointing.gif'
              width='200'
              height='200'
              layout='fixed'
              alt='Imagen principal'
            />

          </div>
          <p>
            <br />
            Cuando descubrí este mundo web hace dos años,
            comencé aprendiendo por curiosidad y poco a poco me fui sumergiendo más.
            Terminé encontrando algo que me encanta hacer y en cual me estoy especializando que es el desarrollo Frontend.<br />
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