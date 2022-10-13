import type { NextPage } from 'next'
import { ListProjects } from '../components'
import stylesPanel from '../styles/Panel.module.css'

const Projects: NextPage = () => {
  return (
    <main className={stylesPanel.panel}>
      <header>
        <h1>Proyectos</h1>
      </header>
      <ListProjects />
    </main>
  )
}

export default Projects