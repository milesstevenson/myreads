import React from 'react'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  };

  doSomething(book, shelf) {
    console.log("Hey we're here");
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
          click={() => this.setState({ showSearchPage: false })}/>
        ) : (
          <ListBooks
            click={() => this.setState({ showSearchPage: true })}/>
        )}
      </div>
    )
  }
}

export default BooksApp
