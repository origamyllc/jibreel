/**
 * Created by prashun on 11/9/15.
 */

var uuid = require('node-uuid');
var registry=require("../../registry").get();

var GRAPH = (function(nodeFactory) {

  // our instance holder
  var instance,models={};

  // Instance stores a reference to the Singleton
  function init() {
    return {
       createNode:function(options,callback){
         var node =nodeFactory.createNode(options);
           node.id=uuid.v4();
           callback(node);
       },
       readNode:function(name,callback){
         var node =nodeFactory.readNode(name);
         callback(node);
       },
       updateNode:function(name){

       },
       deleteNode:function(name){

       },
       getAdjacentNodes:function(name){

       },
       createEdge:function(from,to){

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

})(registry.nodeFactory);

module.exports.GRAPH= GRAPH.getInstance();
