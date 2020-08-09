import React from "react";
import Title from "./title";
import Card from "./card";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Title />
        <Card />
      </div>
    );
  }
}

export default Home;
