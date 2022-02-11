import { Container, Row, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Meeting() {
  return (
    <Container fluid className="main px-0 mx-0">
      <Row className="m-4 pt-4 pb-4 ">
        <Col md={4} className="px-0">
          <span className="mainheadercard">Today Meeting</span>
        </Col>
        <Col md={4}>
          <span className="texttitle text-muted">02 Nov 2021</span>
        </Col>
      </Row>
    </Container>
  );
}
export default Meeting;
