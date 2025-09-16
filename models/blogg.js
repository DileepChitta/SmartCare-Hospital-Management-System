const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: "/images/default.jpg" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('blog', blogSchema);