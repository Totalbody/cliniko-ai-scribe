const express = require('express');
const router = express.Router();

// Example Scribe route
router.get('/', (req, res) => {
  res.json({ message: 'Scribe route works!' });
});

module.exports = router;