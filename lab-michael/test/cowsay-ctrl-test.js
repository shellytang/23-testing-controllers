require('./lib/test-helper.js');

const angular = require('angular');
const cowsay = require('cowsay-browser');

describe('Cowsay Controller', function() {
  beforeEach(function() {
    angular.mock.module('cowsayDemoApp');
    angular.mock.inject(function($controller)  {
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });
  describe('initial properties from on-load', function() {
    it('TITLE should read Welcome to CowTown', function() {
      expect(this.cowsay.title).toBe('Welcome to CowTown');
    });
    it('HISTORY should have nothing in it', function() {
      expect(Array.isArray(this.cowsayCtrl.history)).toBe(true);
    });
    // it('should show bonified "cow" files', function() {
    //   cowsay.list((err, cows) => {
    //     expect(this.cowsayCtrl.cows).toEqual(cows);
    //     expect(this.cowsayCtrl.current).toEqual(cows[0]);
    //   });
    // });
  });
});
