import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

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
      <Head>
        <title>Sobre mí</title>
        <link rel='icon' href='favicon.ico' />
      </Head>  
        <header>
          <h1>Sobre mí</h1>
        </header>
        
        <section>
          <div className={styles.container__info}>
          <p>Hola, soy Nathalia, desarrolladora frontend especializada en construir interfaces atractivas, intuitivas y centradas en la experiencia del usuario.
          Desde los primeros proyectos académicos descubrí mi afinidad por el diseño de interfaces y la experiencia de usuario,
            lo que me llevó naturalmente al mundo del desarrollo frontend. Comencé por curiosidad, 
            y con el tiempo encontré una verdadera pasión en crear productos web que no solo se vean bien, sino que también funcionen con fluidez y claridad.
            <br />
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
            Hoy, con más de dos años de experiencia, he trabajado en proyectos reales que van desde aplicaciones colaborativas hasta soluciones personalizadas para clientes, 
            utilizando tecnologías como React, Vue.js, TypeScript, Tailwind, Redux Toolkit, entre otras. 
            También tengo experiencia trabajando en equipos multidisciplinarios, aplicando buenas prácticas de desarrollo, accesibilidad y diseño responsivo.
            Actualmente me enfoco en seguir creciendo profesionalmente, explorando herramientas modernas y aportando soluciones efectivas en cada proyecto que desarrollo.
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
