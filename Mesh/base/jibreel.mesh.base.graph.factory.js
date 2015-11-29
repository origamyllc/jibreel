/**
 * Created by prashun on 11/9/15.
 */

var uuid = require('node-uuid');
var registry=require("../../registry").get();

var GRAPH = (function(nodeFactory,redis,edgeFactory) {

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
       updateNode:function(name){

       },
       deleteNode:function(name){

       },
       getAdjacentNodes:function(name){

       },
       addEdge:function(options,callback){
         var edge = edgeFactory.addEdge(options);
         edge.id=uuid.v4();
         callback(edge);
       },
       readEdge:function(from,to){

       },
       updateEdge:function(from,to){

       },
       deleteEdge:function(from,to){

       },
       getAdjacencyMatrix:function(){

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

})(registry.nodeFactory,registry.redis,registry.edgeFactory);

module.exports.GRAPH= GRAPH.getInstance();
