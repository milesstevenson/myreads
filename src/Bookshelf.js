import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


class Bookshelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.books.map(book => {
                const image = book.imageLinks.thumbnail || book.imageLinks.smallThumbnail;
                return <li> <Book title={ book.title } authors={ book.authors } cover={ image } /> </li>;
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default Bookshelf;
