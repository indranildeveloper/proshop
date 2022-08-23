import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-2">
            Made with 💙 by &copy; Indranil Halder
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
