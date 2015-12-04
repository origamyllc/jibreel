/**
 * Created by prashun on 11/24/15.
 */


module.exports = function() {

  var self =this;

  var deviceControllerNode = function () {}

  deviceControllerNode.prototype.init = function (bus,node,redis,lru) {
    self.bus=bus;
    self.node=node;
    self.redis= redis;
    self.lru =lru;
    self.stream();
  }

  self.stream = function(){
    self.bus.on('stream',function(data){
            self.getConfiguration(function(config){
              console.log(data);
              console.log(config);
            });
      });
  }

  self.getConfiguration =function(callback){

    // todo configuration should be pulled only once

      self.lru.get(self.node.fullName, function (adjacentNodes) {
        adjacentNodes.forEach(function (adjacentNode) {
          if (adjacentNode.split(".").indexOf("config") !== -1) {

    //todo configuration has to come from lru instead of redis

            self.redis.get(adjacentNode, function (config) {
              callback(config);
            });
          }
        });
      });
  }

  return new deviceControllerNode();

}

