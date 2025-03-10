const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const targetsFilePath = path.join(__dirname, '../database/targets.json');

// Helper function to read targets from the JSON file
const readTargets = () => {
    const data = fs.readFileSync(targetsFilePath, 'utf8');
    return JSON.parse(data);
};

// GET request to retrieve all targets
router.get('/targets', (req, res) => {
    const targets = readTargets();
    res.json(targets);
});

// GET request to retrieve target information based on target-id
router.get('/target/:id', (req, res) => {
    const targets = readTargets();
    const target = targets.find(t => t['target-id'] === req.params.id);

    if (target) {
        res.json(target);
    } else {
        res.status(404).json({ message: 'Target not found' });
    }
});

// POST request to add a new target
router.post('/target', (req, res) => {
    const targets = readTargets();
    const newTarget = req.body;

    if (!newTarget['target-id']) {
        return res.status(400).json({ message: 'target-id is required' });
    }

    targets.push(newTarget);
    fs.writeFileSync(targetsFilePath, JSON.stringify(targets, null, 2));

    res.status(201).json(newTarget);
});

module.exports = router;