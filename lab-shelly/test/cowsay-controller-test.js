'use strict';

const angular = require('angular');
const cowsay = require('cowsay-browser');
require('angular-mocks');

describe('testing the CowsayController', function() {

  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject(($rootScope, $controller) => {
      this.$rootScope = $rootScope;
      this.cowsayCtrl = new $controller('CowsayController');
      this.cowsayCtrl.$onInit();
    });
  });

  afterEach(() => this.$rootScope.$apply());

  // it('should pass', () => {
  //   expect(true).toEqual(true);
  // });

  describe('testing the properties on init', () => {
    it('the title should equal "Welcome to Cowville!"', () => {
      expect();
    });

    it('the history array should be empty', () => {
      expect();
    });

    // it('the history array should not be empty text and speak button clicked', () => {
    //   expect();
    });

    it('the cowfiles will be a list of cows', () => {
      expect();
    });

    it('the first cowfile in the array will be the current cow', () => {
      expect(); //squirrel???
    });

    //testing to see if select dragon is will show dragon?

  }); //end of properties testing

  describe('testing the functionality', () => {

    describe('update method', () => {
      it('should return a cow that says hellooo', () => {
        expect();
      });
    });

    describe('speak method', () => {
      it('should return a cow that says hellooo', () => {
        expect();
      });
      it('should return push the spoken item into the history array', () => {
        expect();
      });
    });

    describe('undo method', () => {

      it('should have an empty history array upon init', () => {
        expect();
      });

      it('should show the current cow that says mooo', () => {
        expect();
      });

      it('should show the previous cow upon clicking undo', () => {
        expect();
      });

    });

  });

});
