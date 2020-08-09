import React from "react";
import Title from "./title";
import Timer from "./timer";
import { Tab, Tabs } from "react-bootstrap";

class Record extends React.Component {
  render() {
    return (
      <div className="container">
        <Title />
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="For Time">
            <Timer />
          </Tab>
          <Tab eventKey="profile" title="AMRAP">
            <Timer />
          </Tab>
          <Tab eventKey="contact" title="EMOM">
            <Timer />
          </Tab>
          <Tab eventKey="Tabata" title="Tabata">
            <Timer />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Record;
