var Movie = require('../models/movie');
var express = require('express');

var router = express.Router();


router.route('/movies')
  .get(function (request, response) {
    Movie.find(function (err, movies) {
      if (err) {
        return response.send(err);
      }

      response.json(movies);

    });    
  });
  .post(function (request, response) {
    var movie = new Movie(request.body);

    movie.save(function (err) {
      if(err) {
        return response.send(err);
      }

      response.send({ message: 'Movie Added' });
    });
  });
  

