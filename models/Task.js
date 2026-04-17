const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  category: String,
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  completed: { type: Boolean, default: false },
  recurring: { type: String, enum: ['none', 'daily', 'weekly', 'monthly'], default: 'none' }
});

module.exports = mongoose.model('Task', TaskSchema);
