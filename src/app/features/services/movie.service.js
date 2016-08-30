(function() {
    'use strict';

    angular
        .module('app')
        .service('MovieService', movieService);

    movieService.$inject = ['$http', '$q', 'CONFIG'];
    function movieService($http, $q, CONFIG){

        var mService = this;

        mService.options = function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'PUT');
            res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

            next();
        };

        mService.findMovieById = findMovieById;
        mService.findMovieByType = findMovieByType;
        mService.findAllMovies = findAllMovies;
        mService.createMovie = createMovie;
        mService.updateMovie = updateMovie;
        mService.deleteMovie = deleteMovie;

        function findAllMovies(){
            return $http.get(CONFIG.API_END_POINT +'/movies')
                .then(successFn, errorFn)
        }

        function findMovieById(movieId){
            return $http.get(CONFIG.API_END_POINT +'/movies/' +movieId )
                .then(successFn, errorFn)
        }

        function findMovieByType(type){
            return $http.get(CONFIG.API_END_POINT +'/movies/type/' +type)
                .then(successFn, errorFn)
        }

        function createMovie(movie){
            return $http.post(CONFIG.API_END_POINT +'/movies', movie)
                .then(successFn, errorFn)
        }

        function updateMovie(movieId, movie){
            return $http.put(CONFIG.API_END_POINT +'/movies/' +movieId, movie, mService.options)
                .then(successFn, errorFn)
        }

        function deleteMovie(movieId){
            return $http.delete(CONFIG.API_END_POINT +'/movies/' +movieId)
                .then(successFn, errorFn)
        }

        function successFn(response){
            return response.data;
        }

        function errorFn(errorResponse){
            console.log(errorResponse.status);
            $q.reject(errorResponse.status);
        }
    }
})();
