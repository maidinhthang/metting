import { Container, Row, Image, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Header() {
  return (
    <Container fluid>
      <Row className="mx-0 px-0">
        <Col md={2}>
          <Row>
            <Image src="http://cdn.onlinewebfonts.com/svg/img_470621.png" />
          </Row>
        </Col>
        <Col md={2}>
          <Row>
            <span>Hi,Thang</span>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Header;
