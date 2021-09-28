import React from 'react'

export const UserContext = React.createContext();

// Para passar informação para outros componentes
export const UserStorage = ({children}) => {
  return (
    <UserContext.Provider value={{usuario:'Stefhany'}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
