const express = require('express');
const router = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));