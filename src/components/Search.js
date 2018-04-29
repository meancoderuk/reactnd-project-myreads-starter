import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book';

class Search extends Component {
    componentDidMount() {
        this.props.onQueryChanged('')
    }
    
    queryUpdated = (e) => {
        const query = e.target.value
        this.props.onQueryChanged(query)
    }

    render() {
        const results = this.props.results
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            value={this.props.query}
                            placeholder="Search by title or author"
                            onChange={this.queryUpdated}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            results.length>0 ?
                            this.props.results.map(book =>
                                <Book  
                                    key={book.id}
                                    shelf={book.shelf}
                                    book={book}
                                    onBookShelfChange={this.props.onBookShelfChange}
                                />
                            ) : <div>No books found</div>
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    results: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired,
    onBookShelfChange: PropTypes.func.isRequired,
    onQueryChanged: PropTypes.func.isRequired
}

export default Search
