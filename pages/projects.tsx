import type { NextPage } from 'next'
import Head from 'next/head'
import { ListProjects } from '../components'
import stylesPanel from '../styles/Panel.module.css'

const Projects: NextPage = () => {
  return (
    <main className={stylesPanel.panel}>
      <Head>
        <title>Proyectos</title>
        <link rel='icon' href='favicon.ico' />
      </Head>  
      <header>
        <h1>Proyectos</h1>
      </header>
      <ListProjects />
    </main>
  )
}

export default Projects