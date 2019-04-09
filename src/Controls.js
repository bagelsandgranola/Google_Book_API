import React, {Component} from 'react';
import './Controls.css';
import Search from './Search';
import FilterOptions from './FilterOptions';

class Controls extends Component {
  render() {
  return (
    <div className="Controls">

    <div className="search-div">
          <Search
          handleUpdateSearchTerm={this.props.handleUpdateSearchTerm}
          searchTerm={this.props.searchTerm}> </Search>
        </div>

        <div className="filters-div">
          <FilterOptions 
          handlePrintTypeFilter={this.props.handlePrintTypeFilter}
          handleBookTypeFilter={this.props.handleBookTypeFilter}
          handleUpdate={this.props.handleUpdate}>
          </FilterOptions>
        </div>
    
    </div>
  );
}
}

export default Controls;