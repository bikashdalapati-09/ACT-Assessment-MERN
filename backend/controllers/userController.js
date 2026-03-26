import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        message: "All fields are required 😤",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Password not matched",
      });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        message: "User already exist",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      message: "User Created Successfully 👌",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required 😤",
      });
    }

    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(400).json({
        message: "User not exists 🥲, Please Login first",
      });
    }

    const isPassMatched = await bcrypt.compare(password, existUser.password);
    if (!isPassMatched) {
      return res.status(400).json({
        message: "Incorrect Password 🥲",
      });
    }

    return res.status(200).json({
      message: "User Logged in successfully 👌",
    });
  } catch (error) {
    console.log(error);
  }
};
