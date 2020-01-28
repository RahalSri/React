import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Videos</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }

  onFormSubmit = event => {
    event.preventDefault();
  };
}

export default SearchBar;
