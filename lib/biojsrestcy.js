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


var request = require('request');
var _ = require('underscore');

var DEFAULT_PORT_NUMBER = 1234;
var API_VERSION = 'v1';

var portNumber = DEFAULT_PORT_NUMBER;
var baseUrl = 'http://localhost:' + portNumber + '/' + API_VERSION + '/';


var cyrest = function () {
};


cyrest.setPortNumber = function (newPortNumber) {
  if (newPortNumber === null || newPortNumber === undefined) {
    portNumber = DEFAULT_PORT_NUMBER;
  } else {
    portNumber = newPortNumber;
  }
  baseUrl = 'http://localhost:' + portNumber + '/' + API_VERSION + '/';
  return baseUrl;
};

cyrest.getEmptyNetwork = function (networkName) {
  return {
    data: {
      name: networkName
    },
    elements: {
      nodes: [],
      edges: []
    }
  };
};


/**
 *
 * POST network to Cytoscape.
 * @param network
 */
cyrest.postNetwork = function (network, callback) {
  var postNetworkUrl = baseUrl + 'networks/';

  var options = {
    url: postNetworkUrl,
    headers: {'Content-Type': 'application/json'},
    json: true,
    body: JSON.stringify(network)
  };

  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var suid = body.networkSUID;
      if(callback) {
        callback(suid);
      }
    } else {
      console.log('error: ' + response.statusCode);
    }
  });

};

cyrest.applyLayout = function (suid, layoutName, callback) {
  if(layoutName === null || layoutName === undefined) {
    layoutName = 'grid';
  }
  var applyLayoutUrl = baseUrl + 'apply/layouts/' + layoutName + '/' + suid;

  request.get(applyLayoutUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body.message);
      if(callback) {
        callback(suid);
      }
    } else {
      console.log('Error: Could not apply layout.  ' + response.statusCode);
    }
  });

};

cyrest.applyStyle = function (suid, styleName, callback) {
  var applyStyleUrl = baseUrl + 'apply/styles/' + styleName + '/' + suid;

  request.get(applyStyleUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body.message);
      if(callback) {
        callback(suid);
      }
    } else {
      console.log('Error: Could not apply layout.  ' + response.statusCode);
    }
  });

};


cyrest.getNetwork = function (suid) {

};


module.exports = cyrest;
