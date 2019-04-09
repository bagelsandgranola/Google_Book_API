import React, {Component} from 'react';
import './Booklist.css';
import BookResult from './BookResult';

class Booklist extends Component {


  render() {

    const BookResults = this.props.bookData.map(book => {

        var description = "";
        if ('description' in book.volumeInfo)
        {
            description=book.volumeInfo.description
        }
        else { description = "No description available"}


        var price = "Not for sale"
        if(book.saleInfo.saleability === "NOT_FOR_SALE")
        {
            price = "Not for sale";
        }
        else if (book.saleInfo.saleability === "FREE") {
            price = "Free"  
        }
        else {
            price = ` $${book.saleInfo.retailPrice.amount}`;

        }
        return (
        <BookResult
        name={book.volumeInfo.title}
        price={price}
        description={description}
        author={book.author}
        image={book.volumeInfo.imageLinks.thumbnail}> </BookResult>
        )
    });

  return (
    <div className="Booklist">
            <div className="BookResults">
                {BookResults}
            </div>
    </div>
  );
}
}

export default Booklist;