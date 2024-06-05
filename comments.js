// Create web server
// Use Express.js
// Use MongoDB
// Use Mongoose
// Use body-parser
// Use ejs
// Use nodemon
// Use Postman
// Use Robo 3T
// Use Postman
// Use Insomnia
// Use Postman

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Comment = require('./models/Comment');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

app.get('/', async (req, res) => {
  const comments = await Comment.find();
  res.render('index', { comments });
});

app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

app.post('/comments', async (req, res) => {
  const { name, email, comment } = req.body;
  const newComment = new Comment({
    name,
    email,
    comment
  });
  await newComment.save();
  res.json(newComment);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Use Postman
// GET http