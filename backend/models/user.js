const mongoose = require("mongoose");

/**
 * Represents a schema for storing user data including the
 * email, password, name, role, address, phone number, hours,
 * date of birth, gender, availability, affiliation, skills,
 * resume, resume ID, timestamps, and whether the user is verified.
 */
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isVerified: {
      type: Boolean,
      default: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      default: "",
    },
    phonenumber: {
      type: String,
      default: "",
    },
    hours: {
      type: String,
      default: "",
    },
    dob: {
      type: Date,
    },
    gender: {
      type: String,
      default: "",
    },
    availability: {
      type: String,
      default: "",
    },
    affiliation: {
      type: String,
      default: "",
    },
    skills: {
      type: String,
      default: "",
    },
    resume: {
      type: String,
      default: "",
    },
    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Resume",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
