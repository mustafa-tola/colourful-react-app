import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Green from "./component/green";
import Orange from "./component/orange";
import Brown from "./component/brown";
import DeepPink from "./component/deep pink";
import DeepPink1 from "./component/deep pink 1";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Green />
        <Orange />
        <Brown />
        <DeepPink />
        <DeepPink1 />
      </div>
    );
  }
}

export default App;
