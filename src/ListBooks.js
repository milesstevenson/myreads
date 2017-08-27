import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI';

class ListBooks extends Component {

  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
      const wantToRead = books.filter(book => book.shelf === "wantToRead");
      const read = books.filter(book => book.shelf === "read");
      this.setState({ books });
      this.setState({ currentlyReading });
      this.setState({ wantToRead });
      this.setState({ read });
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading" books={this.state.currentlyReading}/>
            <Bookshelf title="Want to Read" books={this.state.wantToRead}/>
            <Bookshelf title="Read" books={this.state.read}/>
          </div>
        </div>
        <div className="open-search">
          <a onClick={this.props.click}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBooks