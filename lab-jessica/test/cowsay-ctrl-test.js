'use strict';

require('./lib/test-setup.js');

const angular = require('angular');
const cowsay = require('cowsay-browser');

describe('Cowsay Controller', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });

  describe('initial properties', () => {
    it('title property should equal Cowsay Animal Fun!', () => {
      expect(this.cowsayCtrl.title).toBe('Cowsay Animal Fun!');
    });

    it('history property should be an empty array', () => {
      expect(Array.isArray(this.cowsayCtrl.history)).toBe(true);
      expect(this.cowsayCtrl.history.length).toBe(0);
    });

    it('cowfiles property should be equal to list of cowsay files', () => {
      cowsay.list((err, list) => {
        expect(this.cowsayCtrl.cowfiles).toEqual(list);
      });
    });
  });

  describe('#updateCow()', () => {
    it('should return a meow that says meow', () => {
      const expected = '\n' + cowsay.say({text: 'meow', f: 'meow'});
      const result = this.cowsayCtrl.updateCow('meow', 'meow');
      expect(result).toBe(expected);
    });
  });

  describe('#save()', () => {
    it('should add a talking cowfile to the history array', () => {
      const expected = '\n' + cowsay.say({text: 'test', f: 'chick'});
      this.cowsayCtrl.text = 'test';
      this.cowsayCtrl.cowfile = 'chick';
      this.cowsayCtrl.save();
      expect(this.cowsayCtrl.history.length).toBe(1);
      expect(this.cowsayCtrl.history[0]).toBe(expected);
    });

    it('should set lastSave property to saved cow', () => {
      const expected = '\n' + cowsay.say({text: 'test', f: 'chick'});
      this.cowsayCtrl.text = 'test';
      this.cowsayCtrl.cowfile = 'chick';
      this.cowsayCtrl.save();
      expect(this.cowsayCtrl.lastSave).toBe(expected);
    });
  });

  describe('#undo()', () => {
    it('should remove an item from the history array', () => {
      const expected = '\n' + cowsay.say({text: 'test', f: 'chick'});
      this.cowsayCtrl.text = 'test';
      this.cowsayCtrl.cowfile = 'chick';
      this.cowsayCtrl.save();
      this.cowsayCtrl.text = 'test2';
      this.cowsayCtrl.cowfile = 'meow';
      this.cowsayCtrl.save();
      expect(this.cowsayCtrl.history.length).toBe(2);
      this.cowsayCtrl.undo();
      expect(this.cowsayCtrl.history.length).toBe(1);
      expect(this.cowsayCtrl.history[0]).toBe(expected);
    });

    it('should set lastSave property to next item in the history array', () => {
      const expected = '\n' + cowsay.say({text: 'test', f: 'chick'});
      this.cowsayCtrl.text = 'test';
      this.cowsayCtrl.cowfile = 'chick';
      this.cowsayCtrl.save();
      this.cowsayCtrl.text = 'test2';
      this.cowsayCtrl.cowfile = 'meow';
      this.cowsayCtrl.save();
      this.cowsayCtrl.undo();
      expect(this.cowsayCtrl.lastSave).toBe(expected);
    });
  });
});
