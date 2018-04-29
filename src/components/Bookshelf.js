import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Bookshelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    
                </ol>
                </div>
            </div>
        )
    }
}

Bookshelf.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Bookshelf