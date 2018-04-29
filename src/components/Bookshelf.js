import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

class Bookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books.map((book) => {
                    const authors = book.authors.join(', ')
                    return (
                        <Book  
                            key={book.id}
                            shelf={this.props.id}
                            thumbnail={book.imageLinks.smallThumbnail}
                            title={book.title}
                            authors={authors}
                            onBookShelfChange={this.props.onBookShelfChange}
                        />
                    )
                })}
                </ol>
                </div>
            </div>
        )
    }
}

Bookshelf.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onBookShelfChange: PropTypes.func.isRequired
}

export default Bookshelf