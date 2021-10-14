import { useContext } from 'react'
import { FirmContext } from '../../context/FirmContext'

import './InputGroup.css'
import pencil from '../../static/pencil.svg'

import Tooltip from '../Tooltip/Tooltip'

function InputGroup(props) {
  const { id, label, tooltipMessage, placeholder, value } = props;

  const { setFirm } = useContext(FirmContext)

  function handleKeyUp(e) {
    let field = e.target.id
    let value = e.target.value

    setFirm(field, value)
  }

  return (
    <div className="InputGroup">
      <label htmlFor={id} className="text-light">
        {label}
        {tooltipMessage && (
          <Tooltip symbol="?" text={tooltipMessage} />
        )}
      </label>
      <input autoComplete="off" type="text" placeholder={placeholder} id={id} onKeyUp={handleKeyUp} />
      <span className="pencil">
          <img src={pencil} alt="" />
      </span>
    </div>
  )
}

export default InputGroup