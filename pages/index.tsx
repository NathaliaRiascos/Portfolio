import type { NextPage } from 'next'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from 'styles/Home.module.css'
import stylesPanel from 'styles/Panel.module.css'

import { CustomLink } from 'components'

const GITHUB = 'https://github.com/NathaliaRiascos'
const LINKEDIN = 'https://www.linkedin.com/in/nathalia-riascos-84029a200/'
const CV = 'https://drive.google.com/file/d/1paWg96kd4YYqbQPbpXoJw1SAV-Aij2Xn/view'

const Home: NextPage = () => {
  return (
    <main className={`${styles.intro} ${stylesPanel.panel}`}>
      <header id={styles.header}>
        <div className={styles.container__links}>
            <CustomLink className={styles.link} href={GITHUB} icon={faGithub} />
            <CustomLink className={styles.link} href={LINKEDIN} icon={faLinkedin} />
          </div> 
        <div className={styles.intro}>
          <h1>I'm Nathalia Riascos</h1>
          <p>Frontend Developer</p>
        </div>
			</header>
      <section>
        <CustomLink className={`${styles.link} ${styles.link__large}`} href={CV} text='See CV' />
      </section>
    </main>
  )
}

export default Home
