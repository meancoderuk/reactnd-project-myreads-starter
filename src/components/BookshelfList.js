import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class BookshelfList extends Component {

    render() {
        return <div>
            {this.props.bookshelves.map((bookshelf) => {
                const matchingBooks = this.props.books.filter( book => book.shelf === bookshelf.id)
                return (
                    <Bookshelf
                        key={bookshelf.id}
                        id={bookshelf.id}
                        title={bookshelf.title}
                        books={matchingBooks}
                        onBookShelfChange={this.props.onBookShelfChange}
                    />
                )
            })}
        </div>
    }
}

BookshelfList.propTypes = {
    bookshelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onBookShelfChange: PropTypes.func.isRequired
}

export default BookshelfList