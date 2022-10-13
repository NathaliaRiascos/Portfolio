import React from 'react'
import Image from 'next/image'

import styles from './Project.module.css'
import { data } from '../../helpers/data'


import { faEarthAmericas  } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { CustomLink } from '../CustomLink';

interface Project {
  name: string
  description: string
  project_url: string
  github: string
  website: string
}

const Project = ({ data }: Project) => { 

  return (
      <article className={styles.container__project}>
        <Image      
            width={50}
            height={30}
            layout="responsive"
            alt="Picture of the author"
            src={data.project_url}
          />
          <div className={styles.container__texts}>
            <h3>{data.name}</h3>
            <p>{data.description}</p>
          </div>         
          
           <div className={styles.container__links}>
            <CustomLink className={styles.link} href={data.github} text='Go Github' icon={faGithub} />
            <CustomLink className={styles.link} href={data.website} text='Go Website' icon={faEarthAmericas} />
          </div>
        </article>
  )
}

const ListProjects = () => { 
  return (
    <section className={styles.projects}>
      { data.map(ele => <Project key={ele.name} data={ele} />)}
    </section>
  )
}

export default ListProjects