require('dotenv').config()
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('mongoose database is ready!') })
  .catch(err => { console.log('could not connect to database') }) ;

const bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  commentcount: {type: Number, default: 0},
  comments: [{ body: String }]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book