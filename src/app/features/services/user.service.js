(function (){
    'use strict';

    angular
        .module('app')
        .service('UserService', userService);

    userService.$inject =['$http', '$q', 'CONFIG'];
    function userService($http, $q, CONFIG) {

        var uService = this;
        uService.findUserById = findUserById;
        uService.findUserByEmail = findUserByEmail;
        uService.createUser = createUser;
        uService.signInUser = signInUser;

        function findUserById(userId) {
            return $http.get(CONFIG.API_END_POINT + '/users/' + userId)
                .then(successFn, errorFn)
        }

        function findUserByEmail(email) {
            console.log(email);
            return $http.get(CONFIG.API_END_POINT + '/users/email/' + email + '/')
                .then(successFn, errorFn)
        }

        function createUser(user) {
            return $http.post(CONFIG.API_END_POINT +'/users', user)
                .then(successFn, errorFn)
        }

        function signInUser(email, password) {
            return $http.post(CONFIG.API_END_POINT +'/users/loginForm?email='+email+'&password='+password)
                .then(successFn, errorFn)
        }

        function successFn(successResponse) {
            return successResponse.data;
        }

        function errorFn(errorResponse) {
            console.log("Service catch");
            console.log(errorResponse.status);
            $q.reject(errorResponse);

        }
    }
})();
