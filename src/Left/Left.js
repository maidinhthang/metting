import { Container, Row, Image, Nav, Navbar, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Left() {
  return (
    <Container fluid className="mx-0 px-0">
      <Row className="leftlayout">
        {/* .....header left........... */}
        <Row className="mx-0 px-4">
          <Image src="http://cdn.onlinewebfonts.com/svg/img_470621.png" />
        </Row>
        {/* .................col 1 */}
        <Row className="mt-5 mx-0 px-0">
          <Col>
            <Nav.Link href="#">
              <IC.Box />
            </Nav.Link>
            <Nav.Link href="#">
              <IC.Box />
            </Nav.Link>
            <Nav.Link href="#">
              <IC.Box />
            </Nav.Link>
            <Nav.Link href="#">
              <IC.Box />
            </Nav.Link>
          </Col>
        </Row>
        {/* Col 2 */}
        <Row className="mt-3 mb-5 mx-0 px-0">
          <Col>
            <Nav.Link href="#">
              <IC.Box />
            </Nav.Link>
            <Nav.Link href="#">
              <IC.Box />
            </Nav.Link>
            <Nav.Link href="#">
              <IC.Box />
            </Nav.Link>
            <Nav.Link href="#">
              <IC.Box />
            </Nav.Link>
          </Col>
        </Row>
        {/* footer */}
        <Row className="mt-5 mx-0 px-4">
          <Col className="">
            <Row>
              <Image src="http://cdn.onlinewebfonts.com/svg/img_470621.png" />
            </Row>
            <Row className="mt-4 mb-4">
              <Image src="http://cdn.onlinewebfonts.com/svg/img_470621.png" />
            </Row>
            <Row>
              <Image src="http://cdn.onlinewebfonts.com/svg/img_470621.png" />
            </Row>
            <Row className="mt-4 mb-4">
              <Image src="http://cdn.onlinewebfonts.com/svg/img_470621.png" />
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
export default Left;
