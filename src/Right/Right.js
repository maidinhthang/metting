import { Container, Row, Nav, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";
import Header from "./Header";

function Right() {
  return (
    <Container fluid className="mx-0 px-0 right">
      <Col>
        <Row className="mx-0 px-0">
          <Header />
        </Row>
      </Col>
    </Container>
  );
}
export default Right;
