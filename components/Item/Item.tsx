import styles from './Item.module.css'

interface Props {
  text: string
  className?: string
  children: JSX.Element | JSX.Element[]
}

const Item = ({className, text, children}: Props) => {
  return (
    <li className={`${className} ${styles.item}`}>
      { children }
      <span>{text}</span>
    </li>
  )
}

export default Item