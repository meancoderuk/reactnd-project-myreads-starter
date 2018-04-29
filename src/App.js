import React from 'react'
import { Route, Link } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import Search from './components/Search'
import BookshelfList from './components/BookshelfList'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search />
        )}
        />
        <Route path='/' exact render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookshelfList />
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}
        />
      </div>
    )
  }
}

export default BooksApp
