/*
 * biojs-rest-cy
 * https://github.com/keiono/biojs-rest-cy
 *
 * Copyright (c) 2014 Keiichiro Ono
 * Licensed under the MIT license.
 */

/**
@class cyrest
 */



/**
 * Private Methods
 */

/*
 * Public Methods
 */



var cyrest = function(){};

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     cyrest.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */
cyrest.hello = function (name) {
  return 'Test ' + name;
};

cyrest.getEmptyNetwork = function (networkName) {
  return {
    data:{
      name:networkName
    },
    elements:{
      nodes:[],
      edges:[]
    }
  };
};


/**
 *
 * POST network to Cytoscape.
 * @param network
 */
cyrest.postNetwork = function(network) {

};

module.exports = cyrest;
