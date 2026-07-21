import mongoose from "mongoose";
import Trainer from "../models/trainer.js";
import Member from "../models/member.js";

export const createTrainer = async (req, res) => {
  try {
    const { email, phone } = req.body;

    const existingEmail = await Trainer.findOne({ email });
    const existingPhone = await Trainer.findOne({ phone });

    if (existingEmail) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }
    if (existingPhone) {
      return res.status(409).json({
        success: false,
        message: "Phone already exists",
      });
    }

    const trainer = await Trainer.create(req.body);
    res.status(201).json({
      success: true,
      message: "trainer created successfully",
      data: trainer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();

    res.status(200).json({
      success: true,
      message: "trainers fetched successfully",
      data: trainers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTrainer = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "invalid trainer id",
      });
    }

    const trainer = await Trainer.findById(id);

    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "trainer not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "trainer found successfully",
      data: trainer,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTrainer = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "invalid trainer id",
      });
    }

    const { email, phone } = req.body;

    if (email) {
      const existingEmail = await Trainer.exists({ email, _id: { $ne: id } });
      if (existingEmail) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }
    }

    if (phone) {
      const existingPhone = await Trainer.exists({ phone, _id: { $ne: id } });

      if (existingPhone) {
        return res.status(409).json({
          success: false,
          message: "Phone already exists",
        });
      }
    }

    const updatedTrainer = await Trainer.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updatedTrainer) {
      return res.status(404).json({
        success: false,
        message: "trainer not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "trainer updated successfully",
      data: updatedTrainer,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTrainer = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "invalid trainer id",
      });
    }

    const membersAssigned = await Member.exists({ trainer: id });

    if (membersAssigned) {
      return res.status(400).json({
        success: false,
        message: "Cannot delete trainer because members are assigned",
      });
    }

    const deletedTrainer = await Trainer.findByIdAndDelete(id);

    if (!deletedTrainer) {
      return res.status(404).json({
        success: false,
        message: "trainer not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "trainer deleted successfully",
      data: deletedTrainer,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
