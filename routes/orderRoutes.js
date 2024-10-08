const express = require('express');
const { placeOrder, getOrderHistory, getOrderById, cancelOrder } = require('../controllers/orderController');

const router = express.Router();

// Place Order
router.post('/', placeOrder);

// View Order History
router.get('/', getOrderHistory);

// View Single Order by ID
router.get('/:id', getOrderById);

// Cancel Order by ID
router.delete('/:id', cancelOrder);

module.exports = router;
