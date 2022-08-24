import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db";
import products from "./data/products";

dotenv.config();

connectDB();

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
    `Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow
      .bold
  );
});
