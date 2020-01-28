import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDispaly from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = { lat: null, errorMessage: "" };

  render() {
    console.log("rendering....");
    return <div className="border red">{this.renderContent()}</div>;
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDispaly lat={this.state.lat} />;
    } else {
      return <Spinner message="Please accept location request." />;
    }
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
    console.log("content visible now....");
  }

  componentDidUpdate() {
    console.log("component upated");
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
