/**
 * Created by prashun on 11/17/15.
 */

exports.get=function() {
  var fractals = require('./Core/server/util/jibreel.core.server.util.fractals');
  var make = require('./Mesh/nodes/jibreel.mesh.nodes.make')();
  var base = require('./Mesh/nodes/jibreel.mesh.nodes.base');
  var nodeFactory = require('./Mesh/base/jibreel.mesh.base.node.factory').NODE;
  var uuid = require('node-uuid');

 return {
    fractals: fractals,
    make: make,
    baseNode: base,
    nodeFactory: nodeFactory,
    uuid: uuid
  }
}
