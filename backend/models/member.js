import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    membershipPlan: {
      type: String,
      required: true,
      enum: ["Basic", "Standard", "Premium"],
    },
    joinDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    emergencyContact: {
      type: String,
    },
    trainer: {
      type: mongoose.Types.ObjectId,
      ref: "Trainer",
      required:true
    },
  },
  { timestamps: true },
);

const Member = mongoose.model("Member", memberSchema);

export default Member;
