app.controller('introController', function($scope, $rootScope, $interval, $cordovaMedia, $ionicLoading) {
  //var audio = new Audio('chansons/ourson.mp3');
  

    $scope.play = function(src) {
        var media = new Media(src, null, null, mediaStatusCallback);
        $cordovaMedia.play(media);
    }
 
    var mediaStatusCallback = function(status) {
        if(status == 1) {
            $ionicLoading.show({template: 'Loading...'});
        } else {
            $ionicLoading.hide();
        }
    }

    /*
  var audio = new Audio('/android_asset/www/chansons/ourson.mp3');
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
  $interval(ourson, 4000);*/

})