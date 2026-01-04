const User = require('../models/user.model');

// POST /api/register (student)
exports.registerStudent = async (req, res) => {
  try {
    const user = new User({ ...req.body, role: 'student' });
    await user.save();
    res.status(201).json({ message: 'Student registered', id: user._id });
  } catch (err) {
    res.status(400).json({ message: 'Register failed', error: err.message });
  }
};

// POST /api/register-professor
exports.registerProfessor = async (req, res) => {
  try {
    const user = new User({ ...req.body, role: 'officer' });
    await user.save();
    res.status(201).json({ message: 'Professor registered', id: user._id });
  } catch (err) {
    res.status(400).json({ message: 'Register failed', error: err.message });
  }
};

// POST /api/login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password }).exec();
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  res.json({
    message: 'Login success',
    user: { id: user._id, role: user.role, name: user.firstName }
  });
};

// POST /api/forgot-password
exports.forgotPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  const user = await User.findOneAndUpdate(
    { email },
    { $set: { password: newPassword } },
    { new: true }
  );
  if (!user) {
    return res.status(404).json({ success: false, message: 'Email not found' });
  }
  res.json({ success: true, message: 'Password updated' });
};
