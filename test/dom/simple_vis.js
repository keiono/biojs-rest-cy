/*
 * biojs-rest-cy
 * https://github.com/keiono/biojs-rest-cy
 *
 * Copyright (c) 2014 Keiichiro Ono
 * Licensed under the MIT license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// this is your global div instance (see index.html)
var yourDiv = document.getElementById('mocha');

// requires your main app (specified in index.js)
var biojsrestcy = require('../..');

describe('biojs-rest-cy module', function(){
  describe('#init()', function(){
    it('should fill the textBox', function(){
      var opts = {el: yourDiv, text: 'biojs'};
      var instance = new biojsrestcy(opts);
      assert.equal(yourDiv.textContent,"hello biojs");
    });
  });
});
