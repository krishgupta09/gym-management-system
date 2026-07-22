import express from "express";
import {
  createMember,
  deleteMember,
  getAllMembers,
  getMember,
  updateMember,
} from "../controllers/memberController.js";
import { authorizeRoles, verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, authorizeRoles("admin"), createMember);
router.get("/", verifyToken, authorizeRoles("admin", "trainer"), getAllMembers);
router.get("/:id", verifyToken, authorizeRoles("admin", "trainer"), getMember);
router.put("/:id", verifyToken, authorizeRoles("admin"), updateMember);
router.delete("/:id", verifyToken, authorizeRoles("admin"), deleteMember);

export default router;
