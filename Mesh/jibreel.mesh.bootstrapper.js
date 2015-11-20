/**
 * Created by prashun on 11/9/15.
 */

exports.bootstrap=function(app,promisifier,db) {

  var crypto = require('crypto');
  var util= require('./util/jibreel.mesh.util.make.node.js').utils(app,promisifier,db,crypto);
  var routes= require('./jibreel.mesh.routes')(app,promisifier,util);

  routes.createNode();

}
