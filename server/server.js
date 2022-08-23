import express from "express";
import dotenv from "dotenv";
import products from "./data/products";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:productId", (req, res) => {
  const product = products.find(
    (product) => product._id === req.params.productId
  );
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
