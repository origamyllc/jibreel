/**
 * Created by prashun on 11/17/15.
 */

exports.get=function() {
  var fractals = require('./Core/server/util/jibreel.core.server.util.fractals');
  var configUtil= require('./Mesh/util/jibreel.mesh.util.configHelperUtils');
  var base = require('./Mesh/nodes/jibreel.mesh.nodes.base');
  var uuid = require('node-uuid');
  var path=require('path'),
      fs=require('fs');
  var nodeFactory = require('./Mesh/base/jibreel.mesh.base.node.factory').NODE;
  var configHelper = require('./Mesh/helpers/jibreel.mesh.nodes.configHelper').CONFIG_HELPER;

 return {
    fractals: fractals,
    make: configHelper,
    configUtil:configUtil,
    baseNode: base,
    nodeFactory: nodeFactory,
    uuid: uuid,
    path:path,
    fs:fs
  }
}
