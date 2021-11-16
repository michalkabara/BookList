import React, {useState, useContext} from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    publishingHouse: '',
    pages: '',
  })

  return (
    <AppContext.Provider value={{book, setBook}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
