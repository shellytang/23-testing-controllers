// APP LOGIC GOES HERE
require('./scss/main.scss'); // require in CSS

// npm / yarn modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// angular module
const cowsayDemoApp = angular.module('cowsayDemoApp', []);

// angular controllers
cowsayDemoApp.controller('CowsayController', [ '$log', CowsayController]);

function CowsayController($log) {
  $log.debug('init CowsayController');
  this.title = 'Welcome to CowTown';
  this.history = [];

  cowsay.list((err, cows) => {
    this.cows = cows;
    this.current = this.cows[0];
  });


  this.updateCow = function(input) {
    $log.debug('this.update()');
    return '\n' + cowsay.say({text: input || 'Eat Mor Chikin', f: this.current});
  };

  this.speak = function(input) {
    $log.debug('cowsayCtrl.speak()');
    this.spoken = this.updateCow(input);
    this.history.push(this.spoken);
  };

  this.undo = function() {
    $log.debug('cowsayCtrl.undo()');
    this.history.pop();
    this.spoken = this.history.pop() || '';
  };

}
