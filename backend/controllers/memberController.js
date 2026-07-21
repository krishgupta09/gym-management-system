import Member from "../models/member.js";
import mongoose from "mongoose";
import Trainer from "../models/trainer.js";

export const createMember = async (req, res) => {
  try {
    const trainerId = req.body.trainer;

    if (!trainerId) {
      return res.status(400).json({
        success: false,
        message: "trainer is required",
      });
    }

    if (!mongoose.Types.ObjectId.isValid(trainerId)) {
      return res.status(400).json({
        success: false,
        message: "enter a valid trainer id",
      });
    }

    const trainer = await Trainer.findById(trainerId);

    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: "trainer not found",
      });
    }

    const member = await Member.create(req.body);

    res.status(201).json({
      success: true,
      message: "member created successfully",
      data: member,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllMembers = async (req, res) => {
  try {
    const {
      search,
      status,
      page = 1,
      limit = 10,
      sort = "-createdAt",
    } = req.query;
    const pageNumber = Number(page);
    const limitNumber = Math.min(Number(limit), 100);
    const skip = (pageNumber - 1) * limitNumber;
    let query = {};

    // Add search condition if search exists
    if (search) {
      query.name = {
        $regex: search,
        $options: "i",
      };
    }
    // Add status condition if status exists
    if (status) {
      query.status = {
        $regex: status,
        $options: "i",
      };
    }

    const totalMembers = await Member.countDocuments(query);
    const totalPages = Math.ceil(totalMembers / limitNumber);

    const hasNextPage = pageNumber < totalPages;
    const hasPrevPage = pageNumber > 1;

    // single database cell
    const members = await Member.find(query)
      .populate("trainer")
      .sort(sort)
      .skip(skip)
      .limit(limitNumber);

    if (members.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No members found",
        data: [],
        pagination: {
          currentPage: pageNumber,
          totalPages: totalPages,
          totalMembers: totalMembers,
          limit: limitNumber,
          hasNextPage,
          hasPrevPage,
        },
      });
    }

    return res.status(200).json({
      success: true,
      message: "members fetched successfully",
      data: members,
      pagination: {
        currentPage: pageNumber,
        totalPages: totalPages,
        totalMembers: totalMembers,
        limit: limitNumber,
        hasNextPage,
        hasPrevPage,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMember = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid member id",
      });
    }

    const member = await Member.findById(id).populate(
      "trainer",
      "name specialization experience",
    );

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "member not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "member found successfully",
      data: member,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateMember = async (req, res) => {
  try {
    const id = req.params.id;
    const trainerId = req.body.trainer;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid member id",
      });
    }

    if (trainerId) {
      if (!mongoose.Types.ObjectId.isValid(trainerId)) {
        return res.status(400).json({
          success: false,
          message: "enter a valid trainer id",
        });
      }

      const trainerExists = await Trainer.findById(trainerId);

      if (!trainerExists) {
        return res.status(404).json({
          success: false,
          message: "trainer not found",
        });
      }
    }

    const member = await Member.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    }).populate("trainer", "name specialization experience");

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "member not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "member updated successfully",
      data: member,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteMember = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid member id",
      });
    }

    const member = await Member.findByIdAndDelete(id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "member not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "member deleted successfully",
      data: member,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
