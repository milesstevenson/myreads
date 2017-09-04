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
      this.setState({ books, currentlyReading, wantToRead, read });
    });
  }

  changeShelves(book, shelf) {
    const self = this;
    BooksAPI.update(book, shelf).then((response) => {
      const { books } = self.state;
      const currentlyReading = response.currentlyReading.map(id => books.find(book => book.id === id));
      const wantToRead = response.wantToRead.map(id => books.find(book => book.id === id));
      const read = response.read.map(id => books.find(book => book.id === id));
      this.setState({ currentlyReading, wantToRead, read });
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading"
                       books={this.state.currentlyReading}
                       shelfchange={this.changeShelves.bind(this)}
            />
            <Bookshelf title="Want to Read"
                       books={this.state.wantToRead}
                       shelfchange={this.changeShelves.bind(this)}
            />
            <Bookshelf title="Read"
                       books={this.state.read}
                       shelfchange={this.changeShelves.bind(this)}
            />
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