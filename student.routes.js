const express = require('express');
const router = express.Router();
const studentCtrl = require('../controllers/student.controller');

router.get('/students', studentCtrl.getAllStudents);
router.get('/students/:id', studentCtrl.getStudentById);

module.exports = router;
