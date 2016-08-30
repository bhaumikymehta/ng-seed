
(function() {
    'use strict';

    // Define the angular module and the controller
    angular
        .module('app')
        .controller('MovieController', movieController);

    movieController.$inject = ['MovieService'];
    function movieController(movieService){

        var movieController = this;
        movieController.movie = null;
        movieController.createMovie = createMovie;
        movieController.findMovieById = findMovieById;
        movieController.findMovieByType = findMovieByType;
        movieController.createMovie = createMovie;
        movieController.updateMovie = updateMovie;
        movieController.deleteMovie = deleteMovie;

        init();
        function init(){
            movieService.findAllMovies()
                .then(function(data){
                    movieController.movies = data;
                    movieController.totalItems = data.length;
                    movieController.currentPage = 1;
                })

        }

        function findMovieById(movieId){
            movieService.findMovieById(moviesVm.movie.id)
                .then(function(data){
                    console.log(data);
            })
        }

        function findMovieByType(type){
            movieService.findMovieByType(type)
                .then(function(data){
                    console.log(data);
                })
        }

        function createMovie(){
            moviesVm.movie = {"Title": "New Title"};
            movieService.createMovie(moviesVm.movie)
                .then(function(data){
                    console.log(data);
                    moviesVm.movie = data;
                })
        }

        function updateMovie(movieId){
            movieService.findMovieById(mController.movie.id)
                .then(function (data) {
                    moviesVm.movie = data;
                    moviesVm.movie['Actors']='Palaklll';
                    movieService.updateMovie(moviesVm.movie.id,moviesVm.movie)
                })
                .then (function (data){
                    console.log(data);
                })
                .catch(function (error){
                    console.log(error);
                });


        }

        function deleteMovie(movieId){
            movieService.deleteMovie(moviesVm.movie.id)
                .then(function(data){
                    console.log(data);
                })
        }

        function successFn(response){
            console.log(response);
        }

        function errorFn(errorResponse){
            console.log(errorResponse.status);
        }

    }
})();
