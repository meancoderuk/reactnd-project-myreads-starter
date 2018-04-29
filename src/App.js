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
    ],
    searchResults: [],
    searchQuery: ''
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      }
    )
  }
  
  onBookShelfChange = (book, shelf) => {

    let books = this.state.books.filter( existingBook => existingBook.id !== book.id)
    book.shelf = shelf
    books.push(book)

    BooksAPI.update(book, shelf).then(() => {
      this.setState({ books })
    })
  }

  onQueryChanged = (query) => {
    this.setState({ searchQuery: query })
    if (query.length>0) {
      BooksAPI.search(query).then((results) => {
        
        if(results.error) {
          results = []
        } else {
          results.forEach(book => {
            book.shelf = 'none'
            this.state.books.forEach(existingBook => {
              if(book.id === existingBook.id) {
                book.shelf = existingBook.shelf
              }
            })
          })
        }
        if (this.state.searchQuery.length>0) {
          this.setState({ searchResults: results })
        } else {
          this.emptyResults()
        }
        console.log("PROMISE DONE");
      })
    }  else {
      this.emptyResults()
    } 
  }

  emptyResults() {
    this.setState({ searchResults: [] })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search
            results={this.state.searchResults}
            query={this.state.searchQuery}
            updateSearchResults={this.updateSearchResults}
            onBookShelfChange={this.onBookShelfChange}
            onQueryChanged={this.onQueryChanged} 
          />
        )}
        />
        <Route path='/' exact render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookshelfList
                  bookshelves={this.state.bookshelves}
                  books={this.state.books}
                  onBookShelfChange={this.onBookShelfChange} 
                />
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
