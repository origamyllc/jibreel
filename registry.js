/**
 * Created by prashun on 11/17/15.
 */

exports.get=function() {
  var  logger = require('./Core/server/config/jibreel.core.server.config.logger');
  var fractals = require('./Core/server/util/jibreel.core.server.util.fractals');
  var configUtil= require('./Mesh/util/jibreel.mesh.util.config');
  var base = require('./Mesh/nodes/jibreel.mesh.nodes.base');
  var uuid = require('node-uuid');
  var path=require('path'),
      fs=require('fs');

  var nodeFactory = require('./Mesh/base/jibreel.mesh.base.node.factory').NODE;
  var configHelper = require('./Mesh/helpers/jibreel.mesh.nodes.helpers.config').CONFIG_HELPER;
  var collectorHelper = require('./Mesh/helpers/jibreel.mesh.nodes.helpers.collector').COLLECTOR_HELPER;
  var redis= require('./Core/server/db/redis/jibreel.core.server.db.redis.factory').REDIS;
  var collector = require('./Mesh/nodes/jibreel.mesh.nodes.collector');


 return {
    fractals: fractals,
    make: configHelper,
    configUtil:configUtil,
    baseNode : base,
    nodeFactory: nodeFactory,
    uuid: uuid,
    path:path,
    fs:fs,
    logger:logger,
    redis:redis,
    collector:collector,
    collect:collectorHelper
  }
}
