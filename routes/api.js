/*
*
*
*       Complete the API routing below
*       
*       
*/
const Book = require('../database.js')

'use strict';

module.exports = function (app) {

  app.route('/api/books')
    .get(function (req, res){
      Book.find()
        .then(result => res.json(result))
        .catch(err => {
          console.log(err)
          res.status(500).send('Server error')
        })
    })
    
    .post(function (req, res){
      let title = req.body.title;
      if (!title) {
        res.json("missing required field title")
        return;
      }
      const book = new Book({title});
      book.save()
         .then(result => res.json(result))
         .catch(err => {
          console.log(err);
          res.status(500).send("Server error")
         })
    })
    
    .delete(function(req, res){
      //if successful response will be 'complete delete successful'
    });



  app.route('/api/books/:id')
    .get(function (req, res){
      let bookid = req.params.id;
      Book.findById(bookid)
        .then(book => {
          if (!book) {
            res.json('no book exists')
          } else {
            res.json(book)
          }
        })
        .catch(err => {
          console.log(err)
          // server error?
          res.json('no book exists')
        })
    })
    
    .post(function(req, res){
      let bookid = req.params.id;
      let comment = req.body.comment;
      //json res format same as .get
    })
    
    .delete(function(req, res){
      let bookid = req.params.id;
      //if successful response will be 'delete successful'
    });
  
};
