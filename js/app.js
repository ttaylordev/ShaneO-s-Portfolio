angular.module("portfolio", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state("home", {
                url:"/",
                templateUrl:"views/home.html"
            })
            .state("originals", {
                url:"/originals",
                templateUrl:"views/originals.html"
            })
            .state("contact", {
                url:"/contact",
                templateUrl:"views/contact.html"
            })
            .state("tattoos", {
                url:"/tattoos",
                templateUrl:"views/tattoos.html"
            })
    })
