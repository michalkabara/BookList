import {useState, useEffect} from 'react'
import './App.css'
import Book from './components/Book'
import {FakeBookApi} from './data/FakeBookApi'
import Categories from './components/Categories'
import logo from './img/book.png'
import {Switch, Route, Link, useHistory} from 'react-router-dom'

function App() {
  //booklist state
  const [bookList, setBookList] = useState([])
  //categories state
  const [categories, setCategories] = useState([])
  //book state
  const [book, setBook] = useState({
    title: '',
    author: '',
    publishingHouse: '',
    pages: '',
  })

  //
  const history = useHistory()
  const api = new FakeBookApi()

  const fetchData = () => {
    api.fetchBooks().then(data => setBookList(data))
    if (bookList) {
      const bookCategories = bookList.map(book => book.publishingHouse)
      setCategories(bookCategories)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

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

  const filterBooks = category => {
    const newBooks = bookList.filter(item => item.publishingHouse === category)
    if (category === 'all') {
      const stateBackup = bookList
      setBookList(stateBackup)
    } else setBookList(newBooks)
  }

  return (
    <div className='App'>
      <header>
        <div className='logo-container'>
          <img src={logo} alt='' className='logo' />
          <span>BookStore</span>
        </div>
        <div>
          <Link to='/'>Lista książek</Link>

          <Link to='/formularz'>Dodaj książkę</Link>
        </div>
      </header>
      <div className='body'>
        <Switch>
          <Route exact path='/'>
            <Categories filterBooks={filterBooks} categories={categories} />
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
          </Route>
          <Route path='/formularz'>
            <div>
              <form onSubmit={handleSubmit} className='form'>
                <label htmlFor=''>Tytuł</label>
                <input
                  type='text'
                  value={book.title}
                  onChange={e => setBook({...book, title: e.target.value})}
                />
                <label htmlFor=''>Autor</label>
                <input
                  type='text'
                  value={book.author}
                  onChange={e => setBook({...book, author: e.target.value})}
                />
                <label htmlFor=''>Wydawnictwo</label>
                <input
                  type='text'
                  value={book.publishingHouse}
                  onChange={e =>
                    setBook({...book, publishingHouse: e.target.value})
                  }
                />
                <label htmlFor=''>Ilość stron</label>
                <input
                  type='number'
                  value={book.pages}
                  onChange={e => setBook({...book, pages: e.target.value})}
                />
                <button>Dodaj książkę</button>
              </form>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
