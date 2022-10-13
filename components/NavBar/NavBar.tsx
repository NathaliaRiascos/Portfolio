import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEnvelope, faFolder} from '@fortawesome/free-solid-svg-icons'

import styles from './Navbar.module.css'

interface Props {
  href: string
  icon: IconProp
  text: string
}

const CustomLink = ({href, icon, text }: Props) => {
  const { pathname } = useRouter()

  const isEqual = () => {
    return href === pathname
  }
  return (
    <li className={`${isEqual() && styles.active}`}>
      <span>{text}</span> 
      <Link href={href} >
        <FontAwesomeIcon icon={icon} size='xs'/>
      </Link>
    </li>
  )
}

const NavBar = () => {
  
  return (
    <nav className={styles.nav}>
      <ul>
        <CustomLink href='/' text='Inicio' icon={faHouse} />
        <CustomLink href='/about-me' text='Sobre mí' icon={faUser} />
        <CustomLink href='/projects' text='Proyectos' icon={faFolder} />
        <CustomLink href='/contact' text='Contacto' icon={faEnvelope} />
      </ul>
		</nav>
  )
}

export default NavBar