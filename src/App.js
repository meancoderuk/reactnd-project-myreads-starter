import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import Search from './components/Search'
import BookshelfList from './components/BookshelfList'

class BooksApp extends React.Component {
  state = {
    books: [],
    bookshelves: [
      { id: 'currentlyReading', title: 'Currently Reading'},
      { id: 'wantToRead', title: 'Want to Read'},
      { id: 'read', title: 'Read'}
    ]
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
        console.log('books:', this.state.books)
      }
    )
  }
  
  onBookShelfChange = (bookId, shelf) => {

    const updatedBook = this.state.books.find(book => book.id === bookId)
    updatedBook.shelf = shelf

    let books = this.state.books.filter( book => book.id !== bookId)
    books.push(updatedBook)

    BooksAPI.update(updatedBook, shelf).then(() => {
      this.setState({ books })
    })

  }

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
                <BookshelfList bookshelves={this.state.bookshelves} books={this.state.books} onBookShelfChange={this.onBookShelfChange}/>
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
