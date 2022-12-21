import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <Container fluid className="mt-3">
      <Row>
        <Col sm={2}>
          <Dropdown.Menu show>
            <Dropdown.Item eventKey="1">
              <Link to="home">Home</Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              <Link to="aboutme">About Me</Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="3">
              <Link to="contact">Contact</Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="4">More Info</Dropdown.Item>
          </Dropdown.Menu>
        </Col>
        <Col className="ms-4">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
