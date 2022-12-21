import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container fluid className="mt-3">
      <Dropdown.Menu show>
        <Dropdown.Item eventKey="1">Home</Dropdown.Item>
        <Dropdown.Item eventKey="2">About Me</Dropdown.Item>
        <Dropdown.Item eventKey="3">Contact</Dropdown.Item>
        <Dropdown.Item eventKey="4">More Info</Dropdown.Item>
      </Dropdown.Menu>
    </Container>
  );
}

export default App;
