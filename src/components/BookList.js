import {useState, useEffect} from 'react'
import Book from './Book'
import {FakeBookApi} from '../data/FakeBookApi'

const Booklist = () => {
  const api = new FakeBookApi()

  const [bookList, setBookList] = useState([])

  const fetchBooks = async () => {
    const response = await api.fetchBooks()
    if (response) {
      const bookCategories = response.map(book => book.publishingHouse)
      setCategories([...new Set(bookCategories)])
    }
    setBookList(response)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div className='lista'>
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
    </div>
  )
}

export default Booklist
