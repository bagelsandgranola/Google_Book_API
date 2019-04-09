import React, {Component} from 'react';
import './BookResult.css';

class BookResult extends Component {
  render() {

    var shortDescription = this.props.description;
    shortDescription= shortDescription.substring(0, 200);
    shortDescription = shortDescription + "..."
    

  return (
    <div className="BookResult">

        <div className="book_thumbnail">
            <img src={this.props.image} href={this.props.url} alt="picture of book"></img>
        </div>

        <div className="book_textContent">
            <a href={this.props.url} className="book_title"> {this.props.name}</a>
            <h2 className="book_author"> {this.props.author}</h2>
            <p className="book_price"> {this.props.price}</p>
            <p className="book_description"> {shortDescription}</p>
        
        </div>
   

    </div>
  );
}
}

export default BookResult;