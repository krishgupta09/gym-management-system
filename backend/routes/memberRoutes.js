import express from "express";
import { createMember, deleteMember, getAllMembers, getMember, updateMember } from "../controllers/memberController.js";

const router = express.Router();

router.post("/", createMember);
router.get("/", getAllMembers)
router.get("/:id",getMember)
router.put("/:id",updateMember)
router.delete("/:id",deleteMember)

export default router;
