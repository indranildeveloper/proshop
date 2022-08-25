import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Product from "./components/pages/Product";
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
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
