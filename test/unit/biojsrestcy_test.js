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

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var cyrest = require('../..');

describe('biojs-rest-cy module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(cyrest.hello('biojs'), ("Test biojs"));

      // alternative styles
      cyrest.hello('biojs').should.equal("Test biojs");
    });
  });

  describe('#getEmptyNetwork()', function(){
    it('should return an empty network', function(){

      var emptyNetwork = cyrest.getEmptyNetwork('biojs');

      assert.equal(emptyNetwork.data.name, ('biojs'));
      assert.equal(emptyNetwork.elements.nodes.length, 0);
      assert.equal(emptyNetwork.elements.edges.length, 0);
    });
  });
});

