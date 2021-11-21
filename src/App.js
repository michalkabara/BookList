import './App.css'
import logo from './img/book.png'
import styled from 'styled-components'

import Categories from './components/Categories'
import AddBook from './components/AddBook'
import BookList from './components/BookList'
import {Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <header>
        <HeaderContainer>
          <div className='logo-container'>
            <img src={logo} alt='' className='logo' />
            <span>BookStore</span>
          </div>
          <Navigation>
            <Link to='/'>
              <StyledButton>Lista książek</StyledButton>
            </Link>
            <Link to='/formularz'>
              <StyledButton>Dodaj książkę</StyledButton>
            </Link>
          </Navigation>
        </HeaderContainer>
      </header>
      <StyledSection>
        <Switch>
          <Route exact path='/'>
            <Categories />
            <BookList />
          </Route>
          <Route path='/formularz'>
            <AddBook />
          </Route>
        </Switch>
      </StyledSection>
    </div>
  )
}

//style

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  width: 100%;
  min-height: 60px;
  padding: 15px;
  max-width: 1300px;
  margin: auto;

  .logo-container {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;

    img {
      max-width: 50px;
    }
  }
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`

export const StyledButton = styled.button`
  background-color: white;
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid;
  border-color: #ebebeb;
`

const StyledSection = styled.section`
  max-width: 1300px;
  margin: auto;
  padding: 100px 0;
`

export default App
