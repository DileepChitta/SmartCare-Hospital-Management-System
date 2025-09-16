const express = require('express');
const Blog = require('../models/blogg');

const router = express.Router();


router.get('/blog', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.render('blog', { blogs });
  } catch (err) {
    res.status(500).send('Failed to load blogs');
  }
});

module.exports = router;


