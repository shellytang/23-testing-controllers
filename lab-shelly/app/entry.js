'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const angular = require('angular');
const cowsay = require('cowsay-browser');
const cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('#CowsayController');

  this.$onInit = () => {

    this.title = 'Welcome to Cowville';
    this.history = [];

    cowsay.list((err, cows) => {
      this.cowfiles = cows;
      this.current = this.cowfiles[0];
    });

    this.update = function(input) {
      $log.debug('#update');
      return cowsay.say({text : input || 'moooo', f: this.current});
    };

    this.speak = function(input) {
      $log.debug('#speak');
      this.spoken = this.update(input);
      this.history.push(this.spoken);
    };

    this.undo = function() {
      $log.debug('#undo');
      this.history.pop();
      this.spoken = this.history.pop() || '';
    };
  };
}

cowsayApp.controller('NavigationController', ['$log', NavigationController]);

function NavigationController($log) {
  $log.debug('#NavigationController');

  this.$onInit = () => {

    this.routes = [
      {
        name: 'Home',
        url: '/home',
      },
      {
        name: 'About',
        url: '/about',
      },
      {
        name: 'Contact Us',
        url: '/contact us',
      },
    ];
  };
}
