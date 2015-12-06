/**
 * Created by prashun on 11/9/15.
 */

var uuid = require('node-uuid');
var registry=require("../../registry").get();

var GRAPH = (function(nodeFactory,redis,edgeFactory,lru) {

  // our instance holder
  var instance,models={};

  function init() {

    return {
       createNode:function(options,callback){
         var node = nodeFactory.createNode(options);
           node.id=uuid.v4();
           callback(node);
       },
       readNode:function(fullName,callback){
         redis.get(fullName,function(result){
           return callback(result);
         })
       },
       deleteNode:function(name){

       },
       getAdjacentNodes:function(name,callback){
          lru.get(name,function(adjacentNodes){
            if(typeof adjacentNodes !== 'undefined') {
              return callback(adjacentNodes);
            }
          })
       },
       addEdge:function(options,callback){
         var edge = edgeFactory.addEdge(options);
         edge.id=uuid.v4();
         callback(edge);
       },
       readEdge:function(from,to){

       },
       deleteEdge:function(from,to){

       }
    }
  }


  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };

})(registry.nodeFactory,registry.redis,registry.edgeFactory,registry.lru);

module.exports.GRAPH= GRAPH.getInstance();
