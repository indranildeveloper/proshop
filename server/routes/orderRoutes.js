import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  processPayment,
} from "../controllers/orderController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/:orderId").get(protect, getOrderById);
router.route("/:orderId/pay").put(protect, updateOrderToPaid);
router.route("/payment").post(processPayment);

export default router;
