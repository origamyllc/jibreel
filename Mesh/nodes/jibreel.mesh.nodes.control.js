module.exports = function () {

  var registry= require("../../registry").get();

  var self = this;

  var deviceControllerNode = function (node) {
    self.bus=registry.bus;
    self.node= node;
    self.redis= registry.redis;
    self.lru =registry.lru;
    self.computeFactory = refistry.computeFactory;
    self.getStream();
  }

  self.getStream = function(){
    self.bus.once('stream', function() {
      self.stream();
    });
  }

  self.stream = function(){
    self.getComputeNode("compute", function(computeType){
      self.getConfigNode("config", function(config){
        self.bus.on('stream',function(data){
          self.computeFactory.getNode(computeType,data,config)
        });
      });
    });
  }

  self.getConfigNode = function(type,callback){
    self.lru.get(self.node.fullName, function (adjacentNodes) {
      if(typeof adjacentNodes !== "undefined") {
        adjacentNodes.forEach(function (adjacentNode) {
          if (adjacentNode.split(".").indexOf(type) !== -1) {
            self.redis.get(adjacentNode, function (config) {
              return callback(config);
            });
          }
        });
      }
    });
  }

  self.getComputeNode = function(type,callback){
    self.lru.get(self.node.fullName, function (adjacentNodes) {
      if(typeof adjacentNodes !== "undefined") {
        adjacentNodes.forEach(function (adjacentNode) {
          var array = adjacentNode.split(".");
          if (array.indexOf(type) !== -1) {
            return callback(array[array.length - 1]);
          }
        });
      }
    });
  }

  return deviceControllerNode;
}
