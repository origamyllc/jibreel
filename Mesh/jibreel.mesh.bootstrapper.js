/**
 * Created by prashun on 11/9/15.
 */

exports.bootstrap=function(app,promisifier,db) {

  var crypto = require('crypto');
  var Factory= require('./base/jibreel.mesh.base.graph.factory').GRAPH;
  var http = require('../Core/server/http/jibreel.core.server.http').HTTP;

  var configUtil= require('./util/jibreel.mesh.util.config.js').utils(app,promisifier,db,crypto);
  var collectorUtil= require('./util/jibreel.mesh.util.collector.js').utils(promisifier,http);
  var routes= require('./jibreel.mesh.routes')(app,promisifier,configUtil,Factory);

  routes.createNode();
  routes.readNode();

}
