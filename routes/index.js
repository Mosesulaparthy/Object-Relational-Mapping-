const router = require('express').Router();
const apiRoutes = require('./api');

// Prefix all API routes with '/api'
router.use('/api', apiRoutes);

// Route for incorrect routes
router.use((req, res) => {
  res.status(404).send("<h1>Wrong Route!</h1>");
});

module.exports = router;
