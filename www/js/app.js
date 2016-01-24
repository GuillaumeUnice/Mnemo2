// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic-timepicker', 'ionic-datepicker', 'ngCordova.plugins.brightness', 'ngCordova', 'LocalStorageModule'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

})

.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider){

  $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);

  $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?googleapis\.com\/youtube\/v3/.+$')]);
https://www.googleapis.com/youtube/v3/
  $stateProvider.state('home', {
    url : '/home',
    templateUrl : 'templates/home.html',
    controller : 'homeController'
  })

  $stateProvider.state('start', {
    url : '/start',
    templateUrl : 'templates/start.html',
    controller : 'startController'
  })

  $stateProvider.state('settings', {
    url : '/settings',
    templateUrl : 'templates/settings.html',
    controller : 'settingsController'
  })


  $stateProvider.state('playlistAdd', {
      url : '/playlistadd',
      templateUrl : 'templates/playlistAdd.html',
      controller : 'playlistController'
  })

  $stateProvider.state('playlist', {
      url : '/playlist',
      templateUrl : 'templates/playlist.html',
      controller : 'playlistController'
  })


  $stateProvider.state('intro', {
    url : '/intro',
    templateUrl : 'templates/intro.html',
    controller : 'introController'
  })
  
  $urlRouterProvider.otherwise('/home');
});




