import React, { Component } from 'react'
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';

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
            <Link className="close-search" to="/">
              Close
            </Link>
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

export default SearchBooks