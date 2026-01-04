const express = require('express');
const cors = require('cors');

// DB connect function
const connectDB = require('./config/db');

// Routes
const authRoutes = require('./routes/auth.routes');
const studentRoutes = require('./routes/student.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Frontend files serve panna (optional – if you move HTML to public/)
app.use(express.static('public'));

// API routes (all start with /api)
app.use('/api', authRoutes);
app.use('/api', studentRoutes);

const PORT = 3000;

connectDB().then(() => {
  app.listen(PORT, () => console.log('Server running on port', PORT));
});
