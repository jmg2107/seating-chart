angular.module('seating.guests',[])

.controller('GuestController', function($scope, $http){
  $scope.guests = {
    name: "testname"
  };
  $scope.input = function(name){
    $scope.guests.name = name;
  }
  $scope.send = function(){
     return $http({
      method: 'POST',
      url: '/api/users',
      data: $scope.guests
    })
    .then(function () {
      console.log("created new Guest");
    });
  };
  $scope.display = function(){
    return $http({
      method: 'GET',
      url: '/api/users',
    })
    .then(function (res) {
      console.log("res data is ", res.data);
      return res;
    });
  };

});