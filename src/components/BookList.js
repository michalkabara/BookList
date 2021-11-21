import {useState, useEffect} from 'react'
import {useGlobalContext} from '../context'
import Book from './Book'
import styled from 'styled-components'

const Booklist = () => {
  const {api, setBookList, bookList} = useGlobalContext()

  const [categories, setCategories] = useState([])

  const fetchData = async () => {
    const response = await api.fetchBooks()

    setBookList(response)
    console.log(bookList)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <BookGrid>
      {bookList.map(book => {
        const {id, title, author, publishingHouse, pages} = book
        return (
          <Book
            key={id}
            title={title}
            author={author}
            publishingHouse={publishingHouse}
            pages={pages}
          />
        )
      })}
    </BookGrid>
  )
}

const BookGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export default Booklist
