/**
 * Created by g62 on 23/10/16.
 */
var express = require('express');
var fs = require('fs');
var jwt = require('express-jwt');
var favicon = require('serve-favicon')
var http = require('http');
var https = require('https');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var cors = require('cors');
var config = require('./config');

// models for the mongodb
var Director = require('./models/directors');
var Film =  require('./models/films');
var Product = require('./models/products');
var User = require('./models/users');

var app = express();

//ssl
var options = {
  ca: fs.readFileSync('./vietnamfilm/www_vietnamfilm_com.ca-bundle'),
  key  : fs.readFileSync('./vietnamfilm/private.key'),
  cert : fs.readFileSync('./vietnamfilm/www_vietnamfilm_com.crt')
};

// Create an HTTP service.
http.createServer(app).listen(3000);
console.log("listen on 3000");
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(8000);

// links the node server to the webpage
app.use(express.static(path.join(__dirname, '../')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

//Auth0 cred
var authCheck = jwt({
    secret: new Buffer('NMipTphWh5p32wM4EDJc1-zuQpN1ejiIbTBCi5fZnlaC_E9AQQWe0s1Prqi5-2O-', 'base64'),
    audience: 'gpnhOqi20kE7pOM61DYI6BuI93ZjgA4j'
});


// rewrite virtual urls to angular app to enable refreshing of internal pages
app.get('*', function (req, res, next) {
    res.sendFile(path.resolve( __dirname + '/../index.html'));
});


app.get('/api/users', authCheck, function(req, res) {
    res.json(users);
});


// director api
app.get('/api/directors', function(req, res) {
  Director.find(function(err, user) {
    res.send(user);
  });
});

app.post('/api/directors', function(req, res) {

  var director = new Director();

  director.name = req.body.name;
  director.birthday = req.body.birthday;
  director.summary = req.body.summary;

  director.save(function(err) {
    if(err)
      res.send(err);
    res.json({message: 'director created' });
  });

});

app.get('/api/directors/:id', function(req, res) {
  Director.findOne({ _id: req.params.id}, function(err,user) {
    res.send(user);
  });
});

app.put('/api/directors/:id', function(req ,res) {
  Director.findById({_id:req.params.id}, function(err,user) {
    if (err)
      res.send(err);
    director.name = req.body.name;
    director.birthday = req.body.birthday;
    director.summary = req.body.summary;
    director.earlyLife = req.body.earlyLife;
    director.awards = req.body.awards;
    director.film = req.body.film;
    director.imageS = req.body.imageS;
    director.imageL = req.body.imageL;
    director.save(function (err) {
      if (err)
        res.send(err);
     res.json({ message: 'Director updated!'})

    });
  });
})

app.delete('/api/directors/:id',function(req, res) {
  Director.remove({_id:req.params.id}, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: "sucessfull delete"})
  });
});

//film api
app.get('/api/films', function(req, res) {
    Film.find(function(err, user) {
        res.send(user);
    });
});

app.get('/api/films/:id', function(req, res) {
  Film.findOne({_id:req.params.id},function(err, user) {
    res.send(user);
  });
});

app.post('/api/films', function(req, res) {
  Film.findById({_id:req.params.id}, function(err,user) {
    if(err)
      res.send(err);
    film.categoryId = req.body.categoryId;
    film.genre = req.body.genre;
    film.title = req.body.name;
    film.date = req.body.date;
    film.rating = req.body.rating;
    film.director = req.body.director;
    film.cast =req.body.cast;
    film.summary = req.body.summary;
    film.rating = req.body.rating;
    film.releaseDate = req.body.releaseDate;
    film.production = req.body.production;
    film.description = req.body.description;
    film.plot = req.body.plot;
    film.opinion = req.body.opinion;
    film.isSpecial = req.body.isSpecial;
    film.imageS = req.body.imageS;
    film.imageL = req.body.imageL;
  });
})

app.put('/api/films/:id', function(req, res) {
  Film.findById({_id:req.params.id}, function (err,user) {
    if(err)
      res.send(err);

      film.categoryId = req.body.categoryId;
      film.genre = req.body.genre;
      film.title = req.body.name;
      film.director = req.body.director;
      film.summary = req.body.summary;
      film.rating = req.body.rating;
      film.releaseDate = req.body.releaseDate;
      film.save(function(err) {
        if (err)
          res.send(err);
        res.json({message: "Film updated"})

      });

  });
})

app.delete('/api/films/:id', function(req, res) {
  Film.remove({_id: req.params.id} ,function(err, user) {
    if (err)
      res.send(err);

    res.json({message: 'Successfully delete'});
  });
});

//products for shop api
app.get('/api/products', function(req,res) {
  Product.find(function(err, user) {
    res.send(user);
  });
});

app.get('/api/products/:id', function(req, res) {
  Product.findOne(function (err,user) {
      res.send(user);
  });
});



//the users of the site api
app.get('/api/users', function(req, res) {
  User.find(function(err, user) {
    res.send(user);
  });
});

app.get('/api/users/:id', function(req, res) {
  User.findOne(function(err, user) {
    res.send(user)
  });
});

