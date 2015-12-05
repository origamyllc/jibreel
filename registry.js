/**
 * Created by prashun on 11/17/15.
 */

exports.get=function() {
  var  logger = require('./Core/server/config/jibreel.core.server.config.logger');
  var fractals = require('./Core/server/util/jibreel.core.server.util.fractals');
  var configUtil= require('./Mesh/util/jibreel.mesh.util.config');
  var collectorUtil= require('./Mesh/util/jibreel.mesh.util.collector');
  var collector = require('./Mesh/nodes/jibreel.mesh.nodes.collector');
  var controller = require('./Mesh/nodes/jibreel.mesh.nodes.control');
  var base = require('./Mesh/nodes/jibreel.mesh.nodes.base');
  var uuid = require('node-uuid');
  var path=require('path'),
      crypto=require('crypto'),
      fs=require('fs');


  var nodeFactory = require('./Mesh/base/jibreel.mesh.base.node.factory').NODE;
  var edgeFactory = require('./Mesh/base/jibreel.mesh.base.edge.factory').EDGE;
  var configHelper = require('./Mesh/helpers/jibreel.mesh.nodes.helpers.config').CONFIG_HELPER;
  var collectorHelper = require('./Mesh/helpers/jibreel.mesh.nodes.helpers.collector').COLLECTOR_HELPER;
  var redis= require('./Core/server/db/redis/jibreel.core.server.db.redis.factory').REDIS;
  var lru=require('./Core/server/cache/lru/jibreel.core.server.cache.lru.factory').LRU;
  var eventBus=require('./Core/server/eventBus/jibreel.core.server.eventBus').EVENT_BUS;
  var graph=require('./Mesh/base/jibreel.mesh.base.graph.factory').GRAPH;
  var compartor =require('./Mesh/nodes/compute/jibreel.mesh.nodes.compute.comparator').COMPARATOR;
  var queue = require('./Helot/Rabbit/helot.rabbit.queue.factory').QUEUE;
  var exchange = require('./Helot/Rabbit/helot.rabbit.exchange.factory').EXCHANGE;
  var websocket = require('./Helot/primus/helot.primus.websocket.factory').WEBSOCKET;

 return {
    fractals: fractals,
    make: configHelper,
    configUtil:configUtil,
    baseNode : base,
    nodeFactory : nodeFactory,
    edgeFactory : edgeFactory,
    uuid: uuid,
    path:path,
    fs:fs,
    logger:logger,
    redis:redis,
    collector:collector,
    collect:collectorHelper,
    collectorUtil:collectorUtil,
    lru:lru,
    graph:graph,
    crypto:crypto,
    bus:eventBus,
    comparator :compartor,
    controller:controller,
    exchange:exchange
  }
}
