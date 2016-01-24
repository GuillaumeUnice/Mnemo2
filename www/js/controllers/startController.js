app.controller('startController', function($scope, $rootScope, $cordovaGeolocation, $ionicPlatform, $cordovaLocalNotification) {

	//https://www.youtube.com/watch?v=fFNXwzcIz9Q
	//https://youtu.be/yV-0a_iQyno
	$scope.auto = 1;
	$scope.displayOverlay = true;
	$scope.startSession = function() {
		console.log("start");
	};
})

