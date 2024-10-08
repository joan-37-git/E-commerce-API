const express = require('express');
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware'); // Ensure admin checks

const router = express.Router();

// Get all products
router.get('/', getProducts);

// Get a single product by ID
router.get('/:id', getProductById);

// Add a new product (Admin only)
router.post('/', authMiddleware, addProduct); // Admin access

// Update an existing product (Admin only)
router.put('/:id', authMiddleware, updateProduct); // Admin access

// Delete a product (Admin only)
router.delete('/:id', authMiddleware, deleteProduct); // Admin access

module.exports = router;


module.exports = router;

const authMiddleware = require('../middleware/authMiddleware');

// Protect this route with authentication middleware
router.post('/', authMiddleware, addProduct);


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


