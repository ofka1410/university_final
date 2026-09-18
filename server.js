require('dotenv').config();
const express = require('express');
const cors = require('cors');

// ייבוא החיבור לפיירבייס מתוך תיקיית הקונפיגורציה שיצרנו
const { db } = require('./config/firebase');

const app = express();

app.use(cors());
app.use(express.json());

// בדיקת תקינות
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Hiba Payroll Server is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});