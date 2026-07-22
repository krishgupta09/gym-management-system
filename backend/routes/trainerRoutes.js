import express from "express";
import {
  createTrainer,
  deleteTrainer,
  getAllTrainers,
  getTrainer,
  updateTrainer,
} from "../controllers/trainerController.js";

const router = express.Router();

router.post("/", createTrainer);
router.get("/", getAllTrainers);
router.get("/:id", getTrainer);
router.put("/:id", updateTrainer);
router.delete("/:id", deleteTrainer);

export default router;
