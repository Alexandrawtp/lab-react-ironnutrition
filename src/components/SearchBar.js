import React, {Component} from 'react';

class SearchBar extends Component {

  render(){
    return(
      <div>
        <input onChange={this.props.setChange} type="text" placeholder="Search for food"/>
      </div>
    )
  }
}

export default SearchBar;