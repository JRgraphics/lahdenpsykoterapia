const express = require('express');
const router = express.Router();

// @route   GET api/items
// @desc    Get all items
// @access  Public

router.get('/', (req, res) => {
    const test_item = {key: '1', value: 'test'};
    res.json(test_item);
})

module.exports = router;