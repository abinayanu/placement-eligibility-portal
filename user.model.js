const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  password: String,
  role: { type: String, enum: ['student', 'officer'], default: 'student' },
  fatherName: String,
  gender: String,
  dob: String,
  mobileNumber: String,
  course: String,
  batchNo: String,
  placed: Boolean,
  cgpa: Number,
  noOfArrears: Number,
  rollNo: String,
  address: String
});

module.exports = mongoose.model('User', userSchema);
