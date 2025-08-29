const express = require('express');
const dotenv = require('dotenv');
const clinikoRoutes = require('./routes/cliniko');
const scribeRoutes = require('./routes/scribe');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/cliniko', clinikoRoutes);
app.use('/scribe', scribeRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
