import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaDollarSign } from "react-icons/fa";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-2 p-2">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" variant="top">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3" className="d-flex">
          <FaDollarSign />
          <span className="ms-2">{product.price}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Product;
