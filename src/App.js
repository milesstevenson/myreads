import React from 'react'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks/>
        ) : (
          <ListBooks
            click={() => this.setState({ showSearchPage: true })}/>
        )}
      </div>
    )
  }
}

export default BooksApp
