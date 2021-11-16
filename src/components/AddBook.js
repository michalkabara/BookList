import {useHistory} from 'react-router-dom'
import {useGlobalContext} from '../context'

const Addbook = () => {
  const history = useHistory()
  const {book, setBook, api, setBookList, bookList} = useGlobalContext()

  const handleSubmit = e => {
    e.preventDefault()
    if (!book.title || !book.author || !book.publishingHouse || !book.pages) {
      return
    } else api.addNewBook(book).then(book => setBookList([...bookList, book]))
    setBook({
      title: '',
      author: '',
      publishingHouse: '',
      pages: '',
    })
    history.push('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor=''>Tytuł</label>
        <input
          type='text'
          value={book.title}
          onChange={e => setBook({...book, title: e.target.value})}
          required
        />
        <label htmlFor=''>Autor</label>
        <input
          type='text'
          value={book.author}
          onChange={e => setBook({...book, author: e.target.value})}
          required
        />
        <label htmlFor=''>Wydawnictwo</label>
        <input
          type='text'
          value={book.publishingHouse}
          onChange={e => setBook({...book, publishingHouse: e.target.value})}
          required
        />
        <label htmlFor=''>Ilość stron</label>
        <input
          type='number'
          value={book.pages}
          onChange={e => setBook({...book, pages: e.target.value})}
          required
        />
        <button>Dodaj książkę</button>
      </form>
    </div>
  )
}

export default Addbook
