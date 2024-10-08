const Order = require('../models/Order'); // Assuming you have an Order model defined.

// Place Order
exports.placeOrder = async (req, res) => {
    try {
        const orderData = req.body; // Assume order data is sent in the body.
        
        const newOrder = new Order(orderData);
        await newOrder.save();
        
        res.status(201).json(newOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// View Order History for a user
exports.getOrderHistory = async (req, res) => {
    try {
        const orders = await Order.find({ user_id: req.userId }); // Assuming userId is stored in req.userId from middleware.
        
        if (!orders.length) return res.status(404).json({ message: 'No orders found for this user.' });

        res.json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// View Single Order by ID
exports.getOrderById = async (req, res) => {
    try {
        const orderId = req.params.id;
        
        const order = await Order.findById(orderId);
        
        if (!order) return res.status(404).json({ message: 'Order not found.' });

        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
};

// Cancel Order by ID
exports.cancelOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        
        const orderDeleted = await Order.findByIdAndDelete(orderId);
        
        if (!orderDeleted) return res.status(404).json({ message: 'Order not found.' });

        res.json({ message: 'Order cancelled successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
};
