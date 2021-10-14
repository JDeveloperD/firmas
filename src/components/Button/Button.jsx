import FeatherIcon from 'feather-icons-react'
import './Button.css'

function Button(props) {
  const { className, text, icon, iconPosition, onClickFunction } = props

  return (
    <button className={className} onClick={onClickFunction} >
      {iconPosition === 'left' && (
        <FeatherIcon icon={icon} size="20" />
      )}
      {text}
      {iconPosition === 'right' && (
        <FeatherIcon icon={icon} size="20" />
      )}
    </button>
  )
}

export default Button