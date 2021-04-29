const express = require('express');
const queueManager = require('../managers/queue_manager');

const router = express.Router();

router.delete('/', (req, res, next) =>
    queueManager
        .dequeue()
        .then((response) => res.status(201).json(response))
        .catch(next),
);

module.exports = router;