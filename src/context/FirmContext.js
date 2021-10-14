import React, { useState } from "react";
import imgEmpty from '../static/img-empty.jpg'
import logoEmpty from '../static/logo-empty.jpg'

export const FirmContext = React.createContext(null);

export const FirmProvider = ({children}) => {
  const firmInitialState = {
    name: 'David',
    lastName: 'Sandoval',
    profession: 'Profesional del desarrollo web',
    position: 'Desarrollador web',
    companyName: 'Pandora Marketing',
    celphone: '973643140',
    email: 'ing.david1993@gmail.com',
    website: 'http://miweb.net',
    profilePhoto: imgEmpty,
    companyLogo: logoEmpty,
  }
  
  const [firmData, setFirmData] = useState(firmInitialState)
  
  const setFirm = (field, value) => {
    setFirmData({
      ...firmData,
      [field]: value
    })
  }
  
  const clearFirm = () => {
    setFirmData(firmInitialState)
  }

  return (
    <FirmContext.Provider value={{firmData, setFirm, clearFirm}}>
      {children}
    </FirmContext.Provider>
  )
}