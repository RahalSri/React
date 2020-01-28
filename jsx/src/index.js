import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const buttonName = "Click Me!";
  return (
    <div>
      <label className="label" for="name">
        Enter Name
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonName}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
