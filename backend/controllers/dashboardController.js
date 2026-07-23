import Member from "../models/member.js";
import Trainer from "../models/trainer.js";

export const getDashboardStats = async (req, res) => {
  try {
    const [totalMembers, totalTrainers, activeMembers, inactiveMembers] =
      await Promise.all([
        Member.countDocuments(),
        Trainer.countDocuments(),
        Member.countDocuments({ status: "Active" }),
        Member.countDocuments({
          status: "Inactive",
        }),
      ]);

    res.status(200).json({
      success: true,
      message: "Dashboard statistics fetched successfully",
      data: {
        totalMembers,
        totalTrainers,
        activeMembers,
        inactiveMembers,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
