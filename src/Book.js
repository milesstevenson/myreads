import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  state = {
    coverStyle: undefined,
  };

  componentWillMount() {
    let thumbnail;
    if (this.props.book && this.props.book.imageLinks.thumbnail)
      thumbnail = this.props.book.imageLinks.thumbnail;
    else
      thumbnail = "https://books.google.ca/googlebooks/images/no_cover_thumb.gif";
    const coverStyle = {
      width: 128,
      height: 185,
      backgroundImage: `url(${ thumbnail })`
    };

    this.setState({ coverStyle });
  }

  render() {
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={ this.state.coverStyle }></div>
          <div className="book-shelf-changer">
            <select onChange={ (e) => this.props.shelfchange(this.props.book, e.target.value)}>
              <option value="none">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none"> None </option>
            </select>
          </div>
        </div>
        <div className="book-title">{ this.props.book.title }</div>
        <div className="book-authors">{ this.props.book.authors }</div>
      </div>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelfchange: PropTypes.func
};

export default Book;
