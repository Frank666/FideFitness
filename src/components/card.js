import React from "react";
import { getWods } from "../models/wod";
import { Row, Col } from "react-bootstrap";
import Button from "./myButton";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wods: [],
    };
  }

  componentDidMount() {
    this.setState({ wods: getWods() });
  }

  render() {
    console.log(this.state.wods);
    return this.state.wods.map((wod) => {
      return (
        <Row>
          <Col _id={wod.id} xs={2}>
            Date: {wod.date}
          </Col>
          <Col xs={8}>
            <p>Warm-Up: {wod.warmup}</p>
            <p>Strength: {wod.strength}</p>
            <p>WOD: {wod.wod}</p>
            <p>
              <Button />
            </p>
          </Col>
        </Row>
      );
    });
  }
}

export default Card;
