import { Container, Row, Col } from "react-bootstrap";
import * as IC from "react-bootstrap-icons";

function Upcoming() {
  const upcomming = [
    {
      time: "3:30PM",
      timecall: "30 minutes",
      photo: "",
      name: "Meghan Smith",
      place: "Interpid cafe",
      day: "September 10th",
      status: "Comfirmed",
    },
    {
      time: "5:30PM",
      timecall: "30 minutes",
      photo: "",
      name: "Meghan Smith",
      place: "Interpid cafe",
      day: "September 10th",
      status: "Comfirmed",
    },
    {
      time: "3:30PM",
      timecall: "30 minutes",
      photo: "",
      name: "Meghan Smith",
      place: "Interpid cafe",
      day: "September 10th",
      status: "Comfirmed",
    },
    {
      time: "3:30PM",
      timecall: "30 minutes",
      photo: "",
      name: "Meghan Smith",
      place: "Interpid cafe",
      day: "September 10th",
      status: "Comfirmed",
    },
  ];
  return (
    <Container fluid>
      {upcomming.map((comming, index) => (
        <Row className="meeting mb-4 mt-4">
          <Col md={3}>
            <Row>
              <span>{comming.time}</span>
            </Row>
            <Row>
              <span>{comming.timecall}</span>
            </Row>
          </Col>

          <Col md={3}>
            <Row>
              <span>{comming.photo}</span>
            </Row>
            <Row>
              <span>{comming.name}</span>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <span>{comming.day}</span>
            </Row>
            <Row>
              <span>{comming.status}</span>
            </Row>
          </Col>
          <Col md={3}></Col>
        </Row>
      ))}
    </Container>
  );
}
export default Upcoming;
