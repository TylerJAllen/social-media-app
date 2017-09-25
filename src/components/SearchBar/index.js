import React from 'react';
import './styles.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render(){
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
        placeholder="Search Radiant"/>
        <p>Value of the input: {this.state.term}</p>
      </div>
    );
  }
  onInputChange(term) {
    this.setState({term});
    console.log(this.state.term);
  }
}

export default SearchBar;
