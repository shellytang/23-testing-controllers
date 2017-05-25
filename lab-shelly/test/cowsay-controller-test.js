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
      });
    });

    it('the default cow in the select dropdown will be a squirrel', () => {
      cowsay.list((err, cows) => {
        expect(this.cowsayCtrl.current).toEqual(cows[35]);
      });
    });

    it('the cow should have default text "moooo"', () => {
      let expected = cowsay.say({text: 'moooo', f: this.cowsayCtrl.current });
      expect(this.cowsayCtrl.update()).toEqual(expected);
    });

    it('the history array should be empty', () => {
      expect(this.cowsayCtrl.history).toBe.empty;
    });

    it('should return a elephant when elephant on the list is selected', () => {
      this.cowsayCtrl.current = this.cowsayCtrl.cowfiles[13];
      let expected = cowsay.say({text: 'moooo', f: this.cowsayCtrl.current});
      let result = this.cowsayCtrl.update();
      expect(result).toEqual(expected);
    });

    it('the history array should not be empty after submit button is clicked', () => {
      this.cowsayCtrl.speak('hollaaa');
      expect(this.cowsayCtrl.history).not.toBe.empty;
    });

  });

  describe('testing the functionality', () => {

    describe('update method', () => {
      it('should return a cow that says hihi', () => {
        let expected = this.cowsayCtrl.update('hihi');
        let result = cowsay.say({text: 'hihi', f: this.cowsayCtrl.current });
        expect(result).toEqual(expected);
      });
    });

    describe('speak method', () => {
      it('should populate a second pre tag with the current pre tag state', () => {
        cowsay.say({ text: 'hi', f: this.cowsayCtrl.current });
        let updated = this.cowsayCtrl.update();
        this.cowsayCtrl.speak();
        expect(updated).toEqual(this.cowsayCtrl.spoken);
      });

      it('should push the spoken item into the history array', () => {
        cowsay.say({ text: 'hi', f: this.cowsayCtrl.current });
        this.cowsayCtrl.speak();
        expect(this.cowsayCtrl.history[0]).toEqual(this.cowsayCtrl.spoken);
        expect(this.cowsayCtrl.history.length).toEqual(1);
      });
    });

    describe('undo method', () => {

      it('should have an empty history array upon init', () => {
        expect(this.cowsayCtrl.history).toBe.empty;
      });
      it('should show the previous cow with clicking undo', () => {
        this.cowsayCtrl.speak('hi');
        this.cowsayCtrl.speak('hi again');
        this.cowsayCtrl.speak('hi again again');
        let previous = this.cowsayCtrl.history[1];
        this.cowsayCtrl.undo();
        expect(previous).toEqual(this.cowsayCtrl.spoken);
        expect(this.cowsayCtrl.history.length).toEqual(1);
      });
    });
  });

});
