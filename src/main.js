import React from "react";
import TopBar from "./components/menu/topBar";

class Main extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <div className="container"></div>
      </div>
    );
  }
}

export default Main;
