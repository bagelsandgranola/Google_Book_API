import React, {Component} from 'react';
import Search from './Search';
import FilterOptions from './FilterOptions';
import Booklist from './Booklist';
import Controls from './Controls';
import './App.css'

const Books = [
  { "name": "Henry I", 
  "author": "C. Warren Hollister",
  "price": "$50.00",
  "printType": "BOOK",
  "isEbook": true,
  "image": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  "description": "The resulting volume is one that will be welcomed by students and general readers alike",
  },

  { "name": "Henry VIII", 
  "author": "Alison Weir",
  "price": "$15.50",
  "image": "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  "description": "This is a triumph of historical writing which will appeal equally to the general reader and serious historian",
  }
]

class App extends Component {


  constructor(props){
    super(props);

    this.state = {
      booksToDisplay: [],
      options: {
        searchTerm: "Henry",
        filter: null,
        printType: "all",
        bookType: "null"
      },
    }
  }

  updateSearchTerm(searchTerm) {
    console.log("updateSearchTerm ran");
    console.log(`searchTerm was ${searchTerm}`)
    this.setState({
      options: {...this.state.options, searchTerm: searchTerm}}, () => {
        console.log("searchTerm state", this.state.options.searchTerm)
        this.updateUrl()
    })
  }

  filterByPrintType(selection){
    console.log("filterByPrintType ran");
    console.log(`selection was ${selection}`)

    this.setState({
        options: {...this.state.options, printType: selection}}, () => {
          console.log("printType state", this.state.options.printType)
          this.updateUrl()
    })
  }

  filterByBookType(selection){
    console.log("filterByBookType ran");
    console.log(`selection was ${selection}`)

    this.setState({
      options: {...this.state.options, bookType: selection}}, () => {
        console.log("bookType state", this.state.options.bookType)
        this.updateUrl();

      }

    )
  }

  updateUrl() {
    console.log("updateURL ran");

    const url = "https://www.googleapis.com/books/v1/volumes?q=";
    var queryString = url + `${this.state.options.searchTerm}`;

    if (this.state.options.bookType !== "null")
    {
      queryString = queryString + `&filter=${this.state.options.bookType}`

    }
    else {
      queryString = queryString;
    }
    if(this.state.options.printType != "all")
    {
      queryString = queryString + `&printType=${this.state.options.printType}`;

    }
    else {
      queryString = queryString;

    }

    queryString = queryString + `&key=AIzaSyBf7xL4fudSeIBj54gb9g8BQa2WaU8wJXc`;
    console.log("query string", queryString);

    this.updateBookList(queryString);
  }

  updateBookList(queryString) {
    fetch(queryString)
    .then(response => {
      if(!response.ok) {
        console.log('An error occured, throwing error')
        throw new Error('Something went wrong');
      }
      return response;
    })
    .then( res => res.json())
    .then(data => {
      if (data.totalItems == 0) {
        this.setState({
          booksToDisplay: [],
          error: "Oh no, we can't find anything that matches your search results. Please try another search."
        })
      }
      else {
      
      console.log(data);
      const books = data.items;
      console.log(books);
      this.setState({
        booksToDisplay: books,
        error: null
      });
    }
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    })
  }


render() {

  const error = this.state.error
    ? <div className="error">{this.state.error}</div>
    : "";

  return (
    <div className="App">
    
      <div className="app_header"> 
        <h2 className="app_header_text"> Google Book Search </h2>
      </div>
      <div className="controls">
        <Controls 
        handlePrintTypeFilter={(selection) => this.filterByPrintType(selection)}
        handleBookTypeFilter={(selection) => this.filterByBookType(selection)}
        handleUpdate={ () => this.updateUrl() }
        handleUpdateSearchTerm= { (searchTerm) => this.updateSearchTerm(searchTerm)}
        searchTerm={this.state.options.searchTerm}></Controls>

      </div>

      {error}

      <div className="Booklist">
        <Booklist 
        bookData={this.state.booksToDisplay}
        ></Booklist>
      </div>
    </div>
  );
}
}

export default App;