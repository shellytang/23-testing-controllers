'use strict';

require('./lib/test-setup.js');

const angular = require('angular');
const cowsay = require('cowsay-browser');

describe('Cowsay Controller', function() {
  beforeEach(() => {
    angular.mocks.module('cowsayApp');
    angular.mocks.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });

  describe('initial properties', () => {
    it('title property should equal Cowsay Animal Fun!', () => {
      expect(this.cowsayCtrl.title).toBe('Cowsay Animal Fun!');
    });
  });
});
