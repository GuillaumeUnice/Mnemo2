app.controller('settingsController', function($scope, $rootScope, $cordovaGeolocation, $ionicPlatform, $cordovaLocalNotification) {

  	$scope.i=1;
  	$scope.v=1;

    $scope.$watch($scope.i, function() {
        $scope.i = parseFloat($scope.i);
    	console.log($scope.i);
    });

    $scope.changeBrightness = function(l) {
    	document.addEventListener("deviceready", function () {
			setBrightness(l);
		});
    }

})

