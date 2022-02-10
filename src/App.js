import "./App.css";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Right from "./Right/Right";
import Main from "./Main/Main";
import Left from "./Left/Left";

function App() {
  return (
    <Container fluid>
      <Col md={12}>
        <Row>
          <Col md={1}>
            <Left />
          </Col>
          <Col md={6}>
            <Main />
          </Col>
          <Col md={5}>
            <Right />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
export default App;
