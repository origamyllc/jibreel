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
    self.count =0;
  }

  self.stream = function(){
    self.bus.on('stream',function(data){
      ++ self.count;
          if(self.count === 1) {
            self.lru.get(self.node.fullName,function(adjacentNodes){
              adjacentNodes.forEach(function(adjacentNode){
                if(adjacentNode.split(".").indexOf("config") !== -1) {
                  self.redis.get(adjacentNode, function (config) {
                    console.log(config);
                  });
                }
              })
            });
          }
        console.log(data);
      });
  }


  return new deviceControllerNode();

}

