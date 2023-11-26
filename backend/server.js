const express = require('express');
const appRoute = require('./routes/routes.js');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8095;

app.use(express.json());

// Use CORS middleware
app.use(cors());

/** routes */
app.use('/api', appRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});
