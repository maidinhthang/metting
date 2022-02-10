import { Container, Row, Image, Nav, Navbar, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Left() {
  return (
    <Container fluid className="mx-0 px-0">
      <Row className="leftlayout">
        {/* .....header left........... */}
        <Row className="mx-0 px-4">
          <Image
            roundedCircle
            src="https://images.squarespace-cdn.com/content/v1/5c10d93696e76fdf85e28d93/1571318266030-7V092H0SSBP7VEZGXO9E/Main+Circle+Logo.png"
          />
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
        {/* footer */}
        <Row className="mt-5 mx-0 px-4">
          <Image
            roundedCircle
            src="https://images.squarespace-cdn.com/content/v1/5c10d93696e76fdf85e28d93/1571318266030-7V092H0SSBP7VEZGXO9E/Main+Circle+Logo.png"
          />
          <Image
            roundedCircle
            src="https://images.squarespace-cdn.com/content/v1/5c10d93696e76fdf85e28d93/1571318266030-7V092H0SSBP7VEZGXO9E/Main+Circle+Logo.png"
          />
          <Image
            roundedCircle
            src="https://images.squarespace-cdn.com/content/v1/5c10d93696e76fdf85e28d93/1571318266030-7V092H0SSBP7VEZGXO9E/Main+Circle+Logo.png"
          />
        </Row>
      </Row>
    </Container>
  );
}
export default Left;
