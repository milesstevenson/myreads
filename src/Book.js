import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  state = {
    coverStyle: undefined
  };

  componentDidMount() {
    const coverStyle = { width: 128, height: 185, backgroundImage: `url(${this.props.cover})` };
    this.setState({ coverStyle });
  }

  render() {
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={this.state.coverStyle}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    )
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.string,
  cover: PropTypes.object
};

export default Book;
