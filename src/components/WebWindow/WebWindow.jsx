import './WebWindow.css'

function WebWindow({children}) {
  return (
    <div className="WebWindow">
      <div className="WebWindow__top">
          <span className="WebWindow__buttons red"></span>
          <span className="WebWindow__buttons yellow"></span>
          <span className="WebWindow__buttons green"></span>
      </div>
      <div className="WebWindow__bar">
          <p className="text-light">Para: <b>Tu destinatario</b> </p>
          <p className="text-light">Asunto: <b>Mira mi nueva firma de correo electrónico</b> </p>
      </div>
      <div className="WebWindow__body" id="firm">
        <div className="message">
          <div className="block-text small"></div>
          <div className="block-text normal"></div>
          <div className="block-text large"></div>
          <div className="block-text small"></div>
        </div>

        {children}
      </div>
    </div>
  )
}

export default WebWindow