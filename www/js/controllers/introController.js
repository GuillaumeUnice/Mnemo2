app.controller('introController', function($scope, $rootScope, $interval) {
  var audio = new Audio('chansons/ourson.mp3');
  $scope.isSubmited = 0;
  var ourson = function(){
    if($scope.isSubmited < 4) {
      audio.play(); 
      $scope.isSubmited++; 
    }
  }
  $scope.lol = function() {
    $scope.isSubmited = 8;
  }
  ourson();
  $interval(ourson, 4000);

})