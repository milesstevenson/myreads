import React, { Component } from 'react'
import PropTypes from 'prop-types';
//import escapeRegExp from 'escape-string-regexp';
import Book from './Book';
//import sortBy from 'sort-by';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {

  state = {
    query: '',
    displayBooks: [],
  };

  updateQuery(query) {
    this.setState({ query: query.trim()});
    if (query.length > 0) {
      BooksAPI.search(query, 20).then((books) => {
        const displayBooks = books && !books.hasOwnProperty("error") ? books : [];
        this.setState({displayBooks});
      });
    }
  }

  changeBookShelf(book, shelf) {
    BooksAPI.update(book, shelf);
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={this.props.click}>Close</a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.displayBooks.map((b) => {
                return (
                  <li key={ b.id } >
                    <Book
                      book={ b }
                      shelfchange={this.changeBookShelf.bind(this)}
                      >
                    </Book>
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  click: PropTypes.func.isRequired
}

export default SearchBooks