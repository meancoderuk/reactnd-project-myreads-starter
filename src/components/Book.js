import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    changeShelf = shelf => {
        this.props.onBookShelfChange(this.props.book, shelf)
    }
    render() {
        const url = this.props.book.hasOwnProperty('imageLinks') && this.props.book.imageLinks.smallThumbnail
        const authors = this.props.book.hasOwnProperty('authors') && this.props.book.authors.join(', ')
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${url})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(e) => this.changeShelf(e.target.value)} value={this.props.shelf}>
                                <option value="" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            </li>
        )
    }
}

Book.propTypes = {
    shelf: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    onBookShelfChange: PropTypes.func.isRequired
}

export default Book