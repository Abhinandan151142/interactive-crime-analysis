const express = require('express');
const router = express.Router();
const crimeController = require('../controllers/crimeController');

// Get all crimes (with pagination and filtering)
router.get('/', crimeController.getAllCrimes);

// Get statistics overview
router.get('/stats/overview', crimeController.getStats);

// Get recent crimes
router.get('/recent', crimeController.getRecentCrimes);

// Search crimes
router.get('/search', crimeController.searchCrimes);

// Get single crime by ID
router.get('/:id', crimeController.getCrimeById);

// Get crimes by district
router.get('/district/:name', crimeController.getCrimesByDistrict);

// Create new crime
router.post('/', crimeController.createCrime);

module.exports = router;
