import './App.css'
import logo from './img/book.png'

import Categories from './components/Categories'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
import {Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <header>
        <div className='logo-container'>
          <img src={logo} alt='' className='logo' />
          <span>BookStore</span>
        </div>
        <nav>
          <Link to='/'>Lista książek</Link>
          <Link to='/formularz'>Dodaj książkę</Link>
        </nav>
      </header>
      <div className='body'>
        <Switch>
          <Route exact path='/'>
            <Categories />
            <BookList />
          </Route>
          <Route path='/formularz'>
            <AddBook />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
