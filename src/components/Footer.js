import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/NewLogo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={4} sm={5}>
            <img className="logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              {/* Links removed */}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};