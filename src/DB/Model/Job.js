const { default: mongoose } = require("mongoose");

const FindJobsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
  message: String,
  pdf: { type: String, required: true }, // Assuming the file path will be stored
  date: { type: Date, default: Date.now }, // Automatically set the current date
  time: { type: String, default: () => new Date().toLocaleTimeString() }, // String representation of time
});

export const JobSkillOpp =
  mongoose.models.JobSkillOpp || mongoose.model("JobSkillOpp", FindJobsSchema);
