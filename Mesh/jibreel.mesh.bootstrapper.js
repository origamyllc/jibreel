/**
 * Created by prashun on 11/9/15.
 */

exports.bootstrap=function(app,promisifier,db) {

  var crypto = require('crypto');
  var Factory= require('./base/jibreel.mesh.base.graph.factory').GRAPH;
  var http = require('../Core/server/http/jibreel.core.server.http').HTTP;
  var lru = require('../Core/server/cache/lru/jibreel.core.server.cache.lru.factory').LRU;

  var configUtil= require('./util/jibreel.mesh.util.config').utils(app,promisifier,db,crypto);
  var edgeUtil= require('./util/jibreel.mesh.util.edge').utils(app,promisifier,db,lru);
  var collectorUtil= require('./util/jibreel.mesh.util.collector').utils(promisifier,http);
  var routes= require('./jibreel.mesh.routes')(app,promisifier,configUtil,Factory,edgeUtil);

  routes.createNode();
  routes.readNode();
  routes.addEdge();

}
