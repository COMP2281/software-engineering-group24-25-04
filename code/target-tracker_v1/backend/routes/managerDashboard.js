const express = require('express');
const router = express.Router();

// Sample data for the manager dashboard (Replace with real database logic)
router.get('/dashboard', (req, res) => {
    res.json({
        paymentAmount: 2176,
        visitorCount: 475,
        successfulOrders: 87,
        pageViews: 1754
    });
});

module.exports = router;
