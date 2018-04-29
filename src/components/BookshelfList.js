import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class BookshelfList extends Component {

    render() {
        return <div>
            {this.props.bookshelves.map((bookshelf) => (
                <Bookshelf key={bookshelf.id} id={bookshelf.id} title={bookshelf.title} />
            ))}
        </div>
    }
}

BookshelfList.propTypes = {
    bookshelves: PropTypes.array.isRequired
}

export default BookshelfList