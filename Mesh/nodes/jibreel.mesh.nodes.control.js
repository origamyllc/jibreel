module.exports = function () {

  var registry= require("../../registry").get();

  var self = this;

  var deviceControllerNode = function (node) {
    self.bus=registry.bus;
    self.node= node;
    self.redis= registry.redis;
    self.lru =registry.lru;
     self.getStream();
  }


  // to do fix the imports
  self.getStream = function(){
    self.bus.once('stream', function() {
      self.stream();
    });
  }

  self.stream = function(){
    self.getNode("config", function(config){
      // self.getNode("compute",function(config){});
      self.bus.on('stream',function(data){
        // pass the data and  field to read to the comparator
        console.log(data);
        console.log(config);
      });
    });
  }


  self.getNode = function(type,callback){
    self.lru.get(self.node.fullName, function (adjacentNodes) {
      adjacentNodes.forEach(function (adjacentNode) {
        if (adjacentNode.split(".").indexOf(type) !== -1) {
          self.redis.get(adjacentNode, function (config) {
            callback(config);
          });
        }
      });
    });
  }


  return deviceControllerNode;
}
