'use strict';
module.exports = function(app) {
    var booksList = require('../controllers/booksControler');

    // BooksList Routes
    app.route('/books')
        //Read existing Books
        .get(booksList.list_all_books)
        // Create a new Book
        .post(booksList.create_a_book);


    app.route('/books/:bookId')
        //Read existing Books
        .get(booksList.read_a_book)
        //Update an existing Book
        .put(booksList.update_a_book)
        //Delete an existing Book
        .delete(booksList.delete_a_book);
};