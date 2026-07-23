import express from "express";
import { getDashboardStats } from "../controllers/dashboardController.js";
import { authorizeRoles, verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/",
  verifyToken,
  authorizeRoles("admin", "trainer"),
  getDashboardStats,
);

export default router;
