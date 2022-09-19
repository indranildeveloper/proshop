import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/productController";
import { protect, isAdmin } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").get(getProducts).post(protect, isAdmin, createProduct);
router
  .route("/:productId")
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct)
  .put(protect, isAdmin, updateProduct);

export default router;
