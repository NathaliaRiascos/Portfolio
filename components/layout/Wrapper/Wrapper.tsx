import { NextPage } from 'next'
import React from 'react'
import { NavBar } from '../../NavBar'
import styles from './Wrapper.module.css'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Wrapper = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <div className={styles.main}>{ children }</div>
    </div>
  )
}

export default Wrapper