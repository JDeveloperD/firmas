import Tabs from '../components/Tab/Tab'
import WebWindow from '../components/WebWindow/WebWindow'
import Button from '../components/Button/Button'
import FirmCard from '../components/FirmCard/FirmCard'

import logoLight from '../static/logo-light.svg'

import { UserContext } from '../context/UserContext'
import { FirmContext } from '../context/FirmContext'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import {CopyToClipboard} from 'react-copy-to-clipboard';

function MainPage() {
  const { logout } = useContext(UserContext)

  const { clearFirm } = useContext(FirmContext)

  const history = useHistory()

  function handleLogout() {
    logout()

    history.push('/login')
  }

  function copy() {
    console.log('copied!')
  }

  function handleClearFirm() {
    clearFirm()
  }

  return (
    <div className="wrapper">
      <div className="col-one">
        <Tabs />
      </div>

      <div className="col-two">
        <main className="main">
          <div className="d-flex align-items-center justify-between mb-5">
            <a href="https://pandoramarketing.net" className="logo" >
              <img src={logoLight} alt="Pandora Marketing" />
            </a>

            <Button className="Button Button--outline-ligth Button--with-icon rounded-pill" text="Salir" icon="log-out" iconPosition="right" onClickFunction={handleLogout} />
          </div>

          <WebWindow>
            <CopyToClipboard>
              <FirmCard />
            </CopyToClipboard>
          </WebWindow>
        <div className="text-center">
            <Button className="Button Button--large Button--dark mt-5" text="Copiar Firma" onClickFunction={copy} />
          </div>

          <div className="text-center">
            <Button className="Button Button--with-icon text-light mt-3" icon="rotate-cw" text="BORRAR TODO" iconPosition="left" onClickFunction={handleClearFirm} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainPage