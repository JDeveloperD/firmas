import './Tooltip.css'

function Tooltip(props) {

  const { symbol, text } = props

  return (
    <div className="Tooltip"> 
        <span> {symbol} </span>
        <div className="text"> {text} </div> 
    </div>
  )
}

export default Tooltip