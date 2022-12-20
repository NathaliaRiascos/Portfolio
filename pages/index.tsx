import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from 'styles/Home.module.css'
import stylesPanel from 'styles/Panel.module.css'

import { CustomLink } from 'components'

const GITHUB = 'https://github.com/NathaliaRiascos'
const LINKEDIN = 'https://www.linkedin.com/in/nathalia-riascos-84029a200/'
const CV = 'https://drive.google.com/file/d/19AmwzPBYKqSuWz_hZnaPGve3amhA-VCp/view?usp=sharing'
const CVSpanish = 'https://drive.google.com/file/d/1-RjaErJ0vkbiBfPPdtQJicZ2nMUyi2JN/view?usp=sharing'

const Home: NextPage = () => {
  return (
    <main className={`${styles.intro} ${stylesPanel.panel}`}>     
      <Head>
        <title>Inicio</title> 
        <link rel='icon' href='https://nathaliariascos.github.io/Portfolio/favicon.ico' />
      </Head>  

      <header id={styles.header}>
        <div className={styles.container__links}>
          <CustomLink className={styles.link} href={GITHUB} icon={faGithub} />
          <CustomLink className={styles.link} href={LINKEDIN} icon={faLinkedin} />
        </div>       
        <div className={styles.intro}>
          <h1>Soy Nathalia Riascos</h1>
          <p>Desarrolladora Frontend</p>
        </div>
			</header>
      <Image
        src='https://nathaliariascos.github.io/Portfolio/working.gif'
        width='300'
        height='200'
        layout='fixed'
        alt='Imagen principal'
      />
      <section className={styles.btn__links}>
        <CustomLink className={`${styles.link} ${styles.link__large}`} href={CVSpanish} text='CV en español' />
        <CustomLink className={`${styles.link} ${styles.link__large}`} href={CV} text='CV en ingles' />
      </section>
    </main>
  )
}

export default Home
