'use strict';

// require webpack assets
require('./scss/main.scss');

// npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// angular module
const cowsayApp = angular.module('cowsayApp', []);

// angular constructus
cowsayApp.controller('CowsayController', [ '$log', CowsayController]);

function CowsayController($log){
  this.title = 'Cowsay Animal Fun!';
  this.history = [];

  cowsay.list((err, list) => {
    this.cowfiles = list;
  });

  this.updateCow = function(message, type){
    return '\n' + cowsay.say({text: message || 'gimme something to say', f: type});
  };

  this.save = function() {
    this.history.push(this.updateCow(this.text, this.cowfile));
    this.lastSave = this.history[this.history.length-1];
    $log.debug('LAST SAVE', this.lastSave);
  };

  this.undo = function() {
    this.history.pop();
    this.lastSave = this.history[this.history.length-1];
    $log.debug('LAST SAVE', this.lastSave);
  };

}
