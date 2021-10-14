import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirmContext } from '../../context/FirmContext'
import imgMail from '../../static/mail-all.png'

function FirmCard() {

  const { firmData } = useContext(FirmContext)

  const styleTable = {
    border: '1px solid #F6F6F7',
    width: '100%',
    maxWidth: '500px'
  }

  const stylePhoto = {
    display: 'inline-block',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '1rem'
  }

  const styleImgCover = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }

  const styleImgContain = {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }

  const styleLogo = {
    width: '100%',
    height: '32px',
    marginBottom: '1rem'
  }

  const styleSocialItem = {
    backgroundColor: '#FFAA00',
    color: 'white',
    width: '26px',
    height: '26px',
    marginRight: '0.25rem',
    borderRadius: '50%',
  }

  const stylePersonalInfo = {
    color: '#110328',
    borderBottom: '1px solid #FFAA00',
    paddingBottom: '1rem',
    marginBottom: '1rem',
  }

  const styleH3 = {
    marginBottom: '8px',
  }

  return (
    <table cellPadding="16px" cellSpacing="0" style={styleTable}>
      <tbody>
        <tr>
          <td width="140px" style={{textAlign: 'center'}}>
            {/* Picture */}
            <div style={stylePhoto}>
              <img 
                src={firmData.profilePhoto}
                alt="Foto de Perfil"
                style={styleImgCover} />
            </div>

            {/* Logo */}
            <div style={styleLogo}>
              <img 
                  src={firmData.companyLogo}
                  alt="Logo de la Empresa"
                  style={styleImgContain} />
            </div>

            {/* Social Links */}
            <div>
              <Link to="">
                <div style={styleSocialItem}>
                  <img src="" alt="" />
                </div>
              </Link>
            </div>
          </td>

          <td>
            {/* Personal Info */}
            <div style={stylePersonalInfo}>
              <h3 style={styleH3}> { firmData.name } { firmData.lastName } </h3>
              
              <p> {firmData.profession} </p>

              <p> {firmData.position} | {firmData.companyName} </p>
            </div>
            {/* Contact Info */}
            <div> <img src={imgMail} alt="" /> {firmData.email} </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default FirmCard