import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel";

const router = express.Router();

// @desc    Fetch all products
// @route   /api/products
// @access  public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc    Fetch single product
// @route   /api/products/:productId
// @access  public
router.get(
  "/:productId",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found!");
    }
  })
);

export default router;
