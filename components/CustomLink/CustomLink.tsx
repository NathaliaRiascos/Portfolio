import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface Props {
  href: string
  icon?: IconProp
  text?: string
  className?: string
}

const CustomLink = ({ className, href = '/', icon, text }: Props) => {

  return (
      <a href={href}
        className={className}
        target='_blank'rel='noopener noreferrer'>
        {icon && <FontAwesomeIcon icon={icon} size='xs'/>}
        <span>{text}</span>
      </a>
  )
}

export default CustomLink