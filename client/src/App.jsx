import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import UserList from "./pages/UserList";
import EditUser from "./pages/EditUser";
import ProductList from "./pages/ProductList";
import EditProduct from "./pages/EditProduct";
import OrderList from "./pages/OrderList";
// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className="py-4">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart">
                <Route index element={<Cart />} />
                <Route path=":productId" element={<Cart />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/placeorder" element={<PlaceOrder />} />
              <Route path="/order/:orderId" element={<Order />} />
              <Route path="/admin/orderlist" element={<OrderList />} />
              <Route path="/admin/userlist" element={<UserList />} />
              <Route path="/admin/user/:userId/edit" element={<EditUser />} />
              <Route path="/admin/productList" element={<ProductList />} />
              <Route
                path="/admin/productList/:pageNumber"
                element={<ProductList />}
              />
              <Route
                path="/admin/product/:productId/edit"
                element={<EditProduct />}
              />
              <Route path="/search/:keyword" element={<Home />} />
              <Route path="/page/:pageNumber" element={<Home />} />
              <Route
                path="search/:keyword/page/:pageNumber"
                element={<Home />}
              />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
