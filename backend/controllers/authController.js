import Admin from "../models/admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "name, email and password required",
      });
    }

    const existingEmail = await Admin.findOne({ email });

    if (existingEmail) {
      return res.status(409).json({
        success: false,
        message: "email already exists",
      });
    }

    const passwordLength = password.length;

    if (passwordLength < 8) {
      return res.status(400).json({
        success: false,
        message: "password length must be more than or equal to 8 characters",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "user registered successfully",
      data: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "email and password id required",
      });
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "admin doesn't exists with given email",
      });
    }

    const passwordCheck = await bcrypt.compare(password, admin.password);

    if (!passwordCheck) {
      return res.status(401).json({
        success: false,
        message: "password is incorrect",
      });
    }

    const payload = {
      userId: admin._id,
      role: admin.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "logged in successfully",
      data: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
      token
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
