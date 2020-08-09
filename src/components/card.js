import React from "react";
import { getWods } from "../models/wod";
import { Row, Col } from "react-bootstrap";
import Button from "./myButton";
import "../css/general.css";

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
            <p className="bold">Date:</p> {wod.date}
          </Col>
          <Col xs={8}>
            <p className="bold">Warm-Up:</p> <p>{wod.warmup}</p>
            <p className="bold">Strength:</p> <p>{wod.strength}</p>
            <p className="bold">WOD:</p> <p>{wod.wod}</p>
            <p>
              <Button className="buttonRight" />
            </p>
          </Col>
        </Row>
      );
    });
  }
}

export default Card;
