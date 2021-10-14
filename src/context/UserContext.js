import React from 'react'
import { v4 } from 'uuid'

export const UserContext = React.createContext(null)

export const isLoggedIn = () =>  sessionStorage.getItem('user') ? true : false

export function UserProvider ({children}) {
  function login(email, password) {
    
    if (email === 'davidangel_32@hotmail.com' && password === 'contra123') {
      let responseApi = {
        _id: 'el1',
        nickname: 'JDsandoval',
        email: 'ing.david1993@gmail.com',
        avatar: 'https://gravatar.com/avatar/c04980bdfea177f1469b017e2053af53?s=400&d=robohash&r=x',
      }

      sessionStorage.setItem('user', JSON.stringify(responseApi))

      return true
    } else { 
      return false
    }
  }

  function logout() {
    sessionStorage.removeItem('user')
  }

  return (
    <UserContext.Provider value={{login, logout}} >
      {children}
    </UserContext.Provider>
  )
}