var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),

    //created model loading here
    Book = require('./api/models/booksModel'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://ankesh:ankesh123@cluster0.pskwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
 console.log("Connection done ");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//importing route
var routes = require('./api/routes/booksRoutes');
//register the route
routes(app);


app.listen(port);


console.log('books list RESTful API server started on: ' + port);

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});