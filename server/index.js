const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config(); // Allow to call environment variables right inside node application

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Include the extended option

// Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use("/auth", require("./routes/auth")); // New added

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
