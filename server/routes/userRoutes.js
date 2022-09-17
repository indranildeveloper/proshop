import express from "express";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController";
import { protect, isAdmin } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/login").post(authUser);
router.route("/").post(registerUser).get(protect, isAdmin, getUsers);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route("/:userId")
  .delete(protect, isAdmin, deleteUser)
  .get(protect, isAdmin, getUserById)
  .put(protect, isAdmin, updateUser);

export default router;
