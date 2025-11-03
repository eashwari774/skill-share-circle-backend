import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true }, // price per session
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Skill", SkillSchema);
