const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');

const router = express.Router();

// User Registration
router.post('/register', registerUser);

// User Login
router.post('/login', loginUser);

// View Profile
router.get('/:id', getUserProfile);

// Update Profile
router.put('/:id', updateUserProfile);

module.exports = router;


const { body } = require('express-validator');

// Example for registration validation in userRoutes.js
router.post('/register', 
  body('email').isEmail().withMessage('Must be a valid email'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
  registerUser 
);

// Example for adding a product in productRoutes.js
router.post('/', 
  body('name').notEmpty().withMessage('Name is required'),
  body('price').isNumeric().withMessage('Price must be a number'),
  addProduct 
);
