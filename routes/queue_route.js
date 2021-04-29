const express = require('express');
const queueManager = require('../managers/queue_manager');

const router = express.Router();

// enqueue
router.post('/', (req, res, next) =>
    queueManager
        .enqueue()
        .then((response) => res.status(201).json(response))
        .catch(next),
);


module.exports = router;