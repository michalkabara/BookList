import React, {useState, useContext} from 'react'
import {FakeBookApi} from './data/FakeBookApi'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
  const api = new FakeBookApi()
  const [bookList, setBookList] = useState([])
  const [book, setBook] = useState({
    title: '',
    author: '',
    publishingHouse: '',
    pages: '',
  })

  return (
    <AppContext.Provider value={{book, setBook, api, bookList, setBookList}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}
