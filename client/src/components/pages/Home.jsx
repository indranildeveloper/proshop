import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductItem from "../products/ProductItem";
import products from "../../data/products";

const Home = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Home;
