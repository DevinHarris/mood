const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config({ path: path.join(__dirname, '/config/.env') });
const connectDB = require('./connectDB');
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
const moodRoutes = require('./routes/moods');

app.use(cors());
app.use(express.json());
app.use(moodRoutes);

app.listen(PORT, () => {
    console.log(`Mood server listening on PORT: ${PORT}`);
})

