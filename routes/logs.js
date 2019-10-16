const express = require('express');
const router = express.Router();

const Log = require('../models/Logs');
const Tech = require('../models/Techs');

// Get logs
router.get('/', async (req, res) => {
  try {
    const logs = await Log.find({}).sort({
      date: -1
    });
    res.json(logs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add logs
router.post('/', async (req, res) => {
  const { tech, message, attention } = req.body;

  try {
    const newLog = new Log({
      tech,
      message,
      attention
    });
    const newL = await newLog.save();
    res.json(newL);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update Log
router.put('/:id', async (req, res) => {
  const { tech, message, attention } = req.body;

  // Build log object
  const logFields = {};
  if (tech) logFields.tech = tech;
  if (message) logFields.message = message;
  logFields.attention = attention;

  try {
    let ulog = await Log.findById(req.params.id);

    if (!ulog) return res.status(404).json({ msg: 'Log not found' });

    ulog = await Log.findByIdAndUpdate(
      req.params.id,
      { $set: logFields },
      { new: true }
    );

    res.json(ulog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Delete log

router.delete('/:id', async (req, res) => {
  try {
    let log = await Log.findById(req.params.id);

    if (!log) return res.status(404).json({ msg: 'Log not found' });

    await Log.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Log Removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
