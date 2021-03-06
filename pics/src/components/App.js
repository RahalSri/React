import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };
  render() {
    return (
      <div>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }

  onSearchSubmit = async term => {
    const response = await unsplash
      .get("/search/photos", {
        params: {
          query: term
        }
      })
      .catch(e => console.log("xxxxxxxx"));

    this.setState({ images: response.data.results });
  };
}

export default App;
