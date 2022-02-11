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
    <Container fluid className="main px-0 mx-0">
      <Row className="m-4">
        <span className="mainheadercard px-0">Upcoming Meetings</span>
      </Row>
      {upcomming.map((comming, index) => (
        <Row className="meeting m-4 pt-4 pb-4 bordercomming ">
          <Col md={3} className="">
            <Row>
              <span className="texttitle pb-4">{comming.time}</span>
            </Row>
            <Row>
              <span className="textsubtitle">{comming.timecall}</span>
            </Row>
          </Col>

          <Col md={3}>
            <Row>
              <span>{comming.photo}</span>
            </Row>
            <Row>
              <span className="texttitle pb-4">{comming.name}</span>
            </Row>
            <Row>
              <span className="textsubtitle">{comming.place}</span>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <span className="texttitle pb-4">{comming.day}</span>
            </Row>
            <Row>
              <span className="textsubtitle">{comming.status}</span>
            </Row>
          </Col>
          <Col md={3}></Col>
        </Row>
      ))}
    </Container>
  );
}
export default Upcoming;
