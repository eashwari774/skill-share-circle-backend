import express from "express";
import Skill from "../models/Skill.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Add skill (teacher only)
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const { title, category, description, price } = req.body;

    const skill = new Skill({
      teacher: req.user.id,
      title,
      category,
      description,
      price,
    });

    await skill.save();
    res.json({ message: "Skill added successfully", skill });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// Get all skills
router.get("/", async (req, res) => {
  const skills = await Skill.find().populate("teacher", "name email");
  res.json(skills);
});

export default router;
