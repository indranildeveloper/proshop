import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ stepOne, stepTwo, stepThree, stepFour }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {stepOne ? (
          <LinkContainer className="text-success" to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {stepTwo ? (
          <LinkContainer className="text-success" to="/shipping">
            <Nav.Link>Shipping</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {stepThree ? (
          <LinkContainer className="text-success" to="/payment">
            <Nav.Link>Payment</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {stepFour ? (
          <LinkContainer className="text-success" to="/placeorder">
            <Nav.Link>Place Order</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};
export default CheckoutSteps;
