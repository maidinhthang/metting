import {
  Container,
  Row,
  Nav,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Header() {
  return (
    <Container fluid className="main px-0 mx-0">
      <Col>
        <Row className="mainheader">
          <Col md={5}>
            <Col md={8} className="">
              <InputGroup className="mb-3">
                <InputGroup.Text>
                  <IC.Search></IC.Search>
                </InputGroup.Text>
                <FormControl placeholder="Username" />
              </InputGroup>
            </Col>
          </Col>
          <Col md={1}>
            <IC.Box />
          </Col>
          <Col md={1}>
            <IC.Box />
          </Col>
          <Col md={1}>
            <IC.Box />
          </Col>
          <Col md={4}>
            <Row>
              <Col md={6}>
                <span>Thangmd</span>
              </Col>

              <Col md={6}>
                <span>Thangmd</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
export default Header;
