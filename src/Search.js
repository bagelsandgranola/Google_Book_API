import React, {Component} from 'react';
import './Search.css';

class Search extends Component {

    state = {
        currentSearchTerm: ""
    }

    searchTermChanged(searchTerm) {
      console.log("searchTermChanged ran, serachTerm =", searchTerm)
        this.setState({
            currentSearchTerm: searchTerm
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("handleSubmit ran")
        this.props.handleUpdateSearchTerm(this.state.currentSearchTerm);
    }

  render() {
  return (
    <div className="Search">

     <form className="searchForm" onSubmit={ e => this.handleSubmit(e) }> 
         <label htmlFor="search"> Search: </label>
         <input className="inputField" type="text" name="search" placeholder="Search by title, author, topic, etc." onChange={e => this.searchTermChanged(e.target.value)}></input>
         <button className="searchSubmitButton" type="submit" name="submit"> Search </button>
     </form>


    </div>
  );
}
}

export default Search;