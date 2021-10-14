import './Tab.css'
import { useState } from 'react'
import imgTabText from '../../static/form-tab-text.svg'
import imgTabImage from '../../static/image-tab.svg'
import imgTabStyle from '../../static/style-tab.svg'
import imgTabTemplate from '../../static/template-tab.svg'
import Button from '../Button/Button'
import InputGroup from '../InputGroup/InputGroup'

function Tab() {

  const [tabActive, setTabActive] = useState(true)

  const [tabItemActive, setTabItemActive] = useState("tab1")

  function closeTabWrapper() {
    if(tabActive) {
      setTabActive(false)
      setTabItemActive(null)
    }
  }

  function showTab(tabItem) {
    setTabActive(true)
    setTabItemActive(tabItem)
  }

  return (
    <aside className="Tab">
      <div className="Tab__list">
        <div className={`Tab__item${tabItemActive === 'tab1' ? ` active`: ``}`} onClick={() => {showTab("tab1")}}>
          <img src={imgTabTemplate} alt="" />
        </div>

        <div className={`Tab__item${tabItemActive === 'tab2' ? ` active`: ``}`} onClick={() => {showTab("tab2")}}>
          <img src={imgTabText} alt="" />
        </div>

        <div className={`Tab__item${tabItemActive === 'tab3' ? ` active`: ``}`} onClick={() => {showTab("tab3")}}>
          <img src={imgTabStyle} alt="" />
        </div>

        <div className={`Tab__item${tabItemActive === 'tab4' ? ` active`: ``}`}  onClick={() => {showTab("tab4")}}>
          <img src={imgTabImage} alt="" />
        </div>
      </div>

      <div className={`Tab__wrapper${tabActive ? ` active`: ``}`}>
        <Button className="Button text-light position-absolute top-5 end-5 z-index-5 d-lg-none" icon="x" iconPosition="left" onClickFunction={closeTabWrapper} />
        {tabItemActive === 'tab1' && (
          <div className="Tab__content">
            <h3 className="Tab__title text-light">Selecciona tu plantilla</h3>

          </div>
        )}

        {tabItemActive === 'tab2' && (

          <div className="Tab__content">
            <h3 className="Tab__title text-light">Introducte la información de tu firma</h3>
            <InputGroup id="name"
                label="Nombre"
                placeholder="David" />
            <InputGroup id="lastName"
                label="Apellidos"
                placeholder="Sandoval" />
            <InputGroup id="profession"
                label="Profesión"
                placeholder="Ing de sistemas" />
            <InputGroup id="position"
                label="Cargo"
                placeholder="Desarrollador" />
            <InputGroup id="compannyName"
                label="Nombre de la Empresa"
                placeholder="Pandora Marketing" />
            <InputGroup id="celphone"
                label="Teléfono móvil"
                placeholder="(+51) 973643140" />
            <InputGroup id="email"
                label="Correo Electrónico"
                placeholder="ing.david1993@gmail.com" />
            <InputGroup id="website"
                label="Url del sitio web"
                placeholder="https://www.example.net" />
          </div>
        )}

        {tabItemActive === 'tab3' && (
          <div className="Tab__content">
            <h3 className="Tab__title text-light">Define un estilo para tu firma</h3>

          </div>
        )}


        {tabItemActive === 'tab4' && (

        <div className="Tab__content">
          <h3 className="Tab__title text-light">Ingresa las imágenes para tu firma</h3>
          <InputGroup id="profilePhoto"
                label="Image de Perfil"
                placeholder="https://www.exampleimage.com/image/sample.png"
                tooltip="true"
                tooltipMessage="Carga una imagen a tu cuenta de Dropbox, Google Drive o similar y pega la URL aquí. El tamaño del archivo no puede superar los 2 MB." />
          <InputGroup id="companyLogo"
                label="Logo de la compañia"
                placeholder="https://www.exampleimage.com/image/sample.png"
                tooltip="true"
                tooltipMessage="Carga una imagen a tu cuenta de Dropbox, Google Drive o similar y pega la URL aquí. El tamaño del archivo no puede superar los 2 MB." />

        </div>
        )}
      </div>
    </aside>
  )
}

export default Tab