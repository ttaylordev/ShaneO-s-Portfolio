angular.module( "portfolio", [ "ui.router" ] )
  .config( function ( $stateProvider, $urlRouterProvider ) {


    $urlRouterProvider.otherwise( '/' );

    $stateProvider
      .state( "home", {
        url: "/",
        templateUrl: "views/home.html"
      } )
      .state( "originals", {
        url: "/originals",
        templateUrl: "views/originals.html"
      } )
      .state( "contact", {
        url: "/contact",
        templateUrl: "views/contact.html"
      } )
      .state( "tattoos", {
        url: "/tattoos",
        templateUrl: "views/tattoos.html",
        controller: 'tattoosCtrl'
      } )
  } );

angular.module( "portfolio" )
  .controller( "tattoosCtrl", function ( $scope ) {

    $scope.tattoos = [ 'images/Tattoos/tattoo (1).jpg', 'images/Tattoos/tattoo (2).jpg', 'images/Tattoos/tattoo (3).jpg', 'images/Tattoos/tattoo (4).jpg', 'images/Tattoos/tattoo (5).jpg', 'images/Tattoos/tattoo (6).jpg', 'images/Tattoos/tattoo (7).jpg', 'images/Tattoos/tattoo (8).jpg', 'images/Tattoos/tattoo (9).jpg', 'images/Tattoos/tattoo (10).jpg', 'images/Tattoos/tattoo (11).jpg', 'images/Tattoos/tattoo (12).jpg', 'images/Tattoos/tattoo (13).jpg', 'images/Tattoos/tattoo (14).jpg', 'images/Tattoos/tattoo (15).jpg', 'images/Tattoos/tattoo (16).jpg', 'images/Tattoos/tattoo (17).jpg', 'images/Tattoos/tattoo (18).jpg', 'images/Tattoos/tattoo (19).jpg', 'images/Tattoos/tattoo (20).jpg', 'images/Tattoos/tattoo (21).jpg', 'images/Tattoos/tattoo (22).jpg', 'images/Tattoos/tattoo (23).jpg', 'images/Tattoos/tattoo (24).jpg', 'images/Tattoos/tattoo (25).jpg', 'images/Tattoos/tattoo (26).jpg', 'images/Tattoos/tattoo (27).jpg', 'images/Tattoos/tattoo (28).jpg', 'images/Tattoos/tattoo (29).jpg', 'images/Tattoos/tattoo (30).jpg', 'images/Tattoos/tattoo (31).jpg', 'images/Tattoos/tattoo (32).jpg', 'images/Tattoos/tattoo (33).jpg', 'images/Tattoos/tattoo (34).jpg', 'images/Tattoos/tattoo (35).jpg', 'images/Tattoos/tattoo (36).jpg', 'images/Tattoos/tattoo (37).jpg', 'images/Tattoos/tattoo (38).jpg', 'images/Tattoos/tattoo (39).jpg', 'images/Tattoos/tattoo (40).jpg', 'images/Tattoos/tattoo (41).jpg', 'images/Tattoos/tattoo (42).jpg', 'images/Tattoos/tattoo (43).jpg', 'images/Tattoos/tattoo (45).jpg', 'images/Tattoos/tattoo (46).jpg', 'images/Tattoos/tattoo (47).jpg', 'images/Tattoos/tattoo (48).jpg', 'images/Tattoos/tattoo (49).jpg', 'images/Tattoos/tattoo (50).jpg', 'images/Tattoos/tattoo (51).jpg', 'images/Tattoos/tattoo (52).jpg', 'images/Tattoos/tattoo (53).jpg', 'images/Tattoos/tattoo (54).jpg', 'images/Tattoos/tattoo (55).jpg', 'images/Tattoos/tattoo (56).jpg', 'images/Tattoos/tattoo (57).jpg', 'images/Tattoos/tattoo (58).jpg', 'images/Tattoos/tattoo (59).jpg'];

  } );
