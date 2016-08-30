(function() {
    'use strict';

    // Define the angular module and the controller
    angular
        .module('app')
        .controller('UserController', userController);

    userController.$inject = ['UserService', '$location'];
    function userController(userService, $location){

        var userController = this;
        userController.findUserById = findUserById;
        userController.findUserByEmail = findUserByEmail;
        userController.createUser = createUser;
        userController.signInUser = signInUser;

        function findUserById(userId){
            userService.findUserById(userId)
                .then(function(data){
                    console.log(data);
                })
        }

        function findUserByEmail(email){
            userService.findUserByEmail(email)
                .then(function(data){
                    console.log(data);
                })
        }

        function createUser(){
            console.log("Inside create user");
            userService.createUser(userController.user)
                .then(function(data){
                    userController.user = null;
                    $location.url('login');
                }, function (error){
                    console.log("Inside catch");
                    console.log(error);
                });
        }

        function signInUser(){
            console.log(userController.user);
            userService.signInUser(userController.user.email, userController.user.password)
                .then(function(data) {
                    console.log("Your name is: " + data);
                })
                .catch(function(error) {
                    console.log("The request failed with response " + error + " and status code");
                });

        }
    }
})();
