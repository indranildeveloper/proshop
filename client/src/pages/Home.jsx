import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductItem from "../components/products/ProductItem";
import AlertMessage from "../components/alert/AlertMessage";
import Loader from "../components/layout/Loader";
import { listProducts } from "../actions/productActions";

const Home = () => {
  const keyword = useParams("keyword");

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <AlertMessage variant="danger">{error}</AlertMessage>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
export default Home;
