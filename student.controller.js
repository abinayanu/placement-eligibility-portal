const User = require('../models/user.model');

// GET /api/students
exports.getAllStudents = async (req, res) => {
  const students = await User.find({ role: 'student' }, { password: 0 }).exec();
  res.json(students);
};

// GET /api/students/:id
exports.getStudentById = async (req, res) => {
  const student = await User.findById(req.params.id, { password: 0 }).exec();
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.json(student);
};
