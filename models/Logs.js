const mongoose = require('mongoose');
// const autopopulate = require('mongoose-autopopulate');

const LogSchema = mongoose.Schema({
  tech: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  attention: {
    type: Boolean,
    required: true
  },
  date: {
    type: String,
    default: new Date().toISOString()
  }
});

// LogSchema.plugin(autopopulate);

module.exports = mongoose.model('log', LogSchema);
