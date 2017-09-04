import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  state = {
    coverStyle: undefined,
  };

  componentDidMount() {
    Array.from(this.textSelect.children).find(child => child.value === this.props.book.shelf).disabled = true;
  }

  componentWillMount() {
    const coverStyle = {
      width: 128,
      height: 185,
      backgroundImage: `url(${ this.props.book.imageLinks.thumbnail })`
    };

    this.setState({ coverStyle });
  }

  render() {
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={ this.state.coverStyle }></div>
          <div className="book-shelf-changer">
            <select ref={select => this.textSelect = select} onChange={ (e) => this.props.shelfchange(this.props.book, e.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
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
  shelfchange: PropTypes.func.isRequired
};

export default Book;
