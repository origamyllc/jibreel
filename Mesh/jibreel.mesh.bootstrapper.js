/**
 * Created by prashun on 11/9/15.
 */

exports.bootstrap=function(app,promisifier,db) {

  var crypto = require('crypto');
  var Factory= require('./base/jibreel.mesh.base.graph.factory').GRAPH;
  var util= require('./util/jibreel.mesh.util.config.js').utils(app,promisifier,db,crypto);
  var routes= require('./jibreel.mesh.routes')(app,promisifier,util,Factory);

  routes.createNode();
  routes.readNode();

}
