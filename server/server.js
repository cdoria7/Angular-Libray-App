const express = require('express');
const app = express();
const port = 5001;

/**
 * Middlewere
 */
app.use(express.json());

/**
 * Server listen 
 */
app.listen(port, function () {
  console.log(`\n\n\tExample app listening on port ${port}!\t\n\n`);
});

/** 
 * Connection to MongoDb 
 */
const mongoose = require('mongoose');
mongoose.connect(`"mongodb://localhost:27017/libraryApp`, { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("\tConnected to MongoDb!"))



/**
 * Create schema and model.
 */
let bookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

let BookModel = mongoose.model('Book', bookSchema);


/**
 * Find all model.
 */
app.get('/books', (req, res) => { 
  BookModel.find( (err, books) => {
    if (err){
      res.statusCode = 400;
      res.send({err: err});
    }
    console.log(books);
    res.send(books);
  });
});

/**
 * Create an object
 */
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  let book = new BookModel({ title, author});
  book.save((err, books) => {
    if (err) {
      res.statusCode = 400;
      res.send({ err: err });
    }
    console.log(books);
    res.send(books);
  });
});

/**
 * Delete an object
 */
app.delete('/books/:id', (req, res) => {
  const _id = req.params.id;
  BookModel.findByIdAndDelete(_id, (err) => {
      if (err) {
        res.statusCode = 400;
        res.send({ err: err });
      }
      res.send('Object Deleted!');
    });
});

/**
 * Update an object
 */
app.put('/books/:id', (req, res) => {
  const { title, author } = req.body;
  const _id = req.params.id;
  BookModel.findByIdAndUpdate(_id, {title, author}, (err, book) => {
    if (err) {
      res.statusCode = 400;
      res.send({ err: err });
    }
    console.log(">> UPDATE: \n", book)
    res.send(book);
  });
});



