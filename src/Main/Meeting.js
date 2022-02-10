import { Container, Row, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Meeting() {
  return (
    <Container fluid>
      <Row className="meeting">
        <Row>
          <span>ToDay Meeting</span>
          <span>ToDay Meeting</span>
        </Row>
        <Row></Row>
      </Row>
    </Container>
  );
}
export default Meeting;
