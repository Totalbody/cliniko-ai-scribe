const express = require('express');
const router = express.Router();

// Example Cliniko route
router.get('/', (req, res) => {
  res.json({ message: 'Cliniko route works!' });
});

module.exports = router;