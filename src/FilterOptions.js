import React, {Component} from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {

  printTypeFilterChanged(selection){
      console.log("printTypeFilterChanged ran")
      console.log(`selection was  ${selection}`)

      this.props.handlePrintTypeFilter(selection);
     
  }  

  bookTypeFilterChanged(selection){
    console.log("bookTypeFilterChanged ran")
    console.log(`selection was  ${selection}`)
    this.props.handleBookTypeFilter(selection);
   
}  

  render() {
  return (
    <div className="FilterOptions">
        <div className="filter_printType">
            <form>
                <label htmlFor="print_type">Print Type:</label>
                <select className="Dropdown_label" id="print_type" name="print_type"
                onChange ={(e) => this.printTypeFilterChanged(e.target.value)}>
                    <option value="all"> All </option>
                    <option value="books"> Books </option>
                    <option value="magazines"> Magazines </option>
                </select>
            </form>
        </div>

        <div className="filter_bookType">
            <form>
                <label htmlFor="book_type">Book Type:</label>
                <select className="Dropdown_label" id="book_type" name="book_type"
                onChange ={(ev) => this.bookTypeFilterChanged(ev.target.value)}>
                    <option value="null"> No Filter </option>
                    <option value="ebooks"> All E-books</option>
                    <option value="free-ebooks"> Free E-book </option>
                    <option value="paid-ebooks"> Paid E-book </option>
                </select>

            </form>
        
        </div>
    </div>
  );
}
}

export default FilterOptions;