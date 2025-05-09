const express = require('express');
const router = express.Router();
const { bookActivity, getMyBookings } = require('../controllers/bookingController');

router.post('/', bookActivity);
router.get('/', getMyBookings);

module.exports = router;
