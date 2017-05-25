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

  describe('testing the properties on init', () => {

    it('the title should equal "Welcome to Cowville!"', () => {
      expect(this.cowsayCtrl.title).toBe('Welcome to Cowville');
    });

    it('the cowfiles will be a list of cows', () => {
      cowsay.list((err, cows) => {
        expect(this.cowsayCtrl.cowfiles).toEqual(cows);
        expect(this.cowsayCtrl.cowfiles).toEqual(jasmine.any(Array));
        expect(this.cowsayCtrl.current).toEqual(cows[0]); //why isn't this squirrel??
      });
    });

    it('the default cow in the array will be a squirrel', () => {
        // console.log('cows', cows);
      let expected = cowsay.say({text: 'moooo', f: 'squirrel' });
      expect(this.cowsayCtrl.current).toEqual(expected); //why isn't this squirrel??
    });

    it('the cow should have default text "moooo"', () => {
      let expected = cowsay.say({text: 'moooo', f: this.cowsayCtrl.current });
      expect(this.cowsayCtrl.update()).toEqual(expected);
    });

    it('the history array should be empty', () => {
      expect(this.cowsayCtrl.history).toBe.empty;
    });

    it('the history array should not be empty with text entry and speak button clicked', () => {
      expect();
    });

  //testing to see if selected dragon will show dragon?
  }); //end of properties testing

  describe('testing the functionality', () => {

    describe('update method', () => {
      it('should return a cow that says hellooo', () => {
        let expected = cowsay.say({text: 'mooo', f: this.cowsayCtrl.current });
        let result = this.cowsayCtrl.update('mooo');
        expect(result).toEqual(expected);
      });

    });

    describe('speak method', () => {
      // this.speak = function(input) {
      //   $log.debug('#speak');
      //   this.spoken = this.update(input);
      //   this.history.push(this.spoken);
      // };
      // it('should return a cow that says hellooo', () => {
      //   let expected = cowsay.say({ text: 'helloo', f: this.cowsayCtrl.current });
      //   this.cowsayCtrl.speak('hello');
      //   expect(this.cowsayCtrl.history[0]).toEqual(expected);
      // });

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
