import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  processPayment,
  getMyOrders,
  getOrders,
} from "../controllers/orderController";
import { protect, isAdmin } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, isAdmin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:orderId").get(protect, getOrderById);
router.route("/:orderId/pay").put(protect, updateOrderToPaid);
router.route("/:orderId/deliver").put(protect, isAdmin, updateOrderToDelivered);
router.route("/payment").post(processPayment);

export default router;
