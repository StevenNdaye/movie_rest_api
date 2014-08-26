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
  })
  .post(function (request, response) {
    var movie = new Movie(request.body);

    movie.save(function (err) {
      if(err) {
        return response.send(err);
      }

      response.send({ message: 'Movie Added' });
    });
  });
  

router.route('/movies/:id').put(function(request, response) {
  Movie.findOne({_id: request.params.id }, function (err, movie) {
    if (err) {
      return response.send(err);
    }

    for (prop in request.body) {
      movie[prop] = request.body[prop];
    } 

    movie.save(function(err){
      if (err) {
        return response.send(err);
      }

      response.json({ message: 'Movie updated!' });
    });
  });
});

router.route('/movies/:id').get(function(request, response){
  Movie.findOne({_id: request.params.id}, function(err, movie){
    if (err) {
      response.send(err);
    }

    response.json(movie);
  });
});

router.route('/movies/:id').delete(function(request, response){
  Movie.remove({_id: request.params.id}, function(err, movie){
    if(err){
      response.send(err);
    }

    response.json({message: 'Successfully deleted'});
  });
});

module.exports = router;
