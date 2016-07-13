angular.module('olympicApp', ['ngRoute']);

angular.module('olympicApp').config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/judo', {
    templateUrl: 'views/judo.html',
    controller: 'JudoController'
  })
  .when('/badminton', {
    templateUrl: 'views/badminton.html',
    controller: 'BadmintonController'
  })
  .when('/diving', {
    templateUrl: 'views/diving.html',
    controller: 'DivingController'
  })
  .when('/archery', {
    templateUrl: 'views/archery.html',
    controller: 'ArcheryController'
  })
  .when('/tableTennis', {
    templateUrl: 'views/tableTennis.html',
    controller: 'TableTennisController'
  })
  $locationProvider.html5Mode(true);
});

angular.module('olympicApp').controller('MainController', function($scope, $http){


  $scope.addAthletes = function(){
    $http.post('/olympics/judo').then(function(response){
      $scope.randoJudo = response.data[Math.floor(Math.random()*response.data.length)];
      // console.log(randoJudo);
    })
    $http.post('/olympics/badminton').then(function(response){
      $scope.randoBadminton = response.data[Math.floor(Math.random()*response.data.length)];
      // console.log(randoBadminton);
    })
    $http.post('/olympics/archery').then(function(response){
      $scope.randoArchery = response.data[Math.floor(Math.random()*response.data.length)];
      // console.log(randoArchery);
    })
    $http.post('/olympics/diving').then(function(response){
      $scope.randoDiving = response.data[Math.floor(Math.random()*response.data.length)];
      // console.log(randoDiving);
    })
    $http.post('/olympics/tableTennis').then(function(response){
      $scope.randoTableTennis = response.data[Math.floor(Math.random()*response.data.length)];
      // console.log(randoTableTennis);
    })
  }

})

angular.module('olympicApp').controller('JudoController', function($scope){

});
angular.module('olympicApp').controller('BadmintonController', function($scope){

});
angular.module('olympicApp').controller('DivingController', function($scope){

});
angular.module('olympicApp').controller('ArcheryController', function($scope){

});
angular.module('olympicApp').controller('TableTennisController', function($scope){

});
