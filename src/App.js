import {useState, useEffect} from 'react'
import './App.css'
import Book from './components/Book'
import {FakeBookApi} from './data/FakeBookApi'
import Categories from './components/Categories'
import logo from './img/book.png'
import {Switch, Route, Link, useHistory} from 'react-router-dom'

function App() {
  const history = useHistory()
  const api = new FakeBookApi()

  const [bookList, setBookList] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [book, setBook] = useState({
    title: '',
    author: '',
    publishingHouse: '',
    pages: '',
  })

  const setSelectedCategoriesHandler = (category, event) => {
    if (event.target.checked) {
      setSelectedCategories(prevState => [...prevState, category])
    } else {
      setSelectedCategories(prevState =>
        prevState.filter(item => item !== category)
      )
    }
  }

  const cleanSelectedCategories = () => {
    setSelectedCategories([])
  }

  useEffect(() => {
    const newBooks = []
    if (selectedCategories.length) {
      selectedCategories.forEach(categoryItem => {
        const debug = bookList.filter(
          item => item.publishingHouse === categoryItem
        )
        newBooks.push(...debug)
      })
      setFilteredBooks(newBooks)
    } else setFilteredBooks(bookList)
  }, [selectedCategories])

  useEffect(() => {
    ;(async () => {
      const response = await api.fetchBooks()
      if (response) {
        const bookCategories = response.map(book => book.publishingHouse)
        setCategories([...new Set(bookCategories)])
      }
      setBookList(response)
    })()
  }, [])

  useEffect(() => {
    setFilteredBooks(bookList)
  }, [bookList])

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
            <Categories
              categories={categories}
              setSelectedCategoriesHandler={setSelectedCategoriesHandler}
              cleanSelectedCategories={cleanSelectedCategories}
            />
            <div className='lista'>
              {filteredBooks.map(book => {
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
                  onChange={e =>
                    setBook({...book, publishingHouse: e.target.value})
                  }
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
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
