import {useHistory} from 'react-router-dom'
import {useState} from 'react/cjs/react.development'
import {useGlobalContext} from '../context'

const Addbook = () => {
  const history = useHistory()
  const {api, setBookList, bookList} = useGlobalContext()

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    publishingHouse: '',
    pages: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
    api.addNewBook(newBook).then(book => setBookList([...bookList, book]))
    setNewBook({
      title: '',
      author: '',
      publishingHouse: '',
      pages: '',
    })
    history.push('/')
  }

  //nie uzupelnia statu i mozna dodac tylko jedna ksiazke, jak sie dodaje znowu to sie podmieniaja

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor=''>Tytuł</label>
        <input
          type='text'
          value={newBook.title}
          onChange={e => setNewBook({...newBook, title: e.target.value})}
          required
        />
        <label htmlFor=''>Autor</label>
        <input
          type='text'
          value={newBook.author}
          onChange={e => setNewBook({...newBook, author: e.target.value})}
          required
        />
        <label htmlFor=''>Wydawnictwo</label>
        <input
          type='text'
          value={newBook.publishingHouse}
          onChange={e =>
            setNewBook({...newBook, publishingHouse: e.target.value})
          }
          required
        />
        <label htmlFor=''>Ilość stron</label>
        <input
          type='number'
          value={newBook.pages}
          onChange={e => setNewBook({...newBook, pages: e.target.value})}
          required
        />
        <button>Dodaj książkę</button>
      </form>
    </div>
  )
}

export default Addbook
