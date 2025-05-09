const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { body } = require('express-validator');

router.post('/register', [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('phone').notEmpty(),
    body('password').isLength({ min: 6 })
], register);

router.post('/login', [
    body('email').isEmail(),
    body('password').notEmpty()
], login);

module.exports = router;
