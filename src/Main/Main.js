import "../App.css";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "./Header";
import Meeting from "./Meeting";
import Upcoming from "./Upcoming";

function Main() {
  return (
    <Container fluid className="main px-0 mx-0">
      <Col>
        <Row>
          <Header />
        </Row>
        <Row>
          <Meeting />
        </Row>
        <Row>
          <Upcoming />
        </Row>
      </Col>
    </Container>
  );
}
export default Main;
