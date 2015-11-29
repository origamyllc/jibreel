
var registry= require("../../registry").get();

var EDGE = (function() {

  // our instance holder
  var instance,models={};

  /**
   *
   * addEdge(i,j)
   $ removeEdge(i,j)
   $ hasEdge(i,j)
   $ outEdges(i)
   $ inEdges(i)
   */

  function init() {

    var edge= function(options){
      this.fromNode = options.fromNode || null;
      this.toNode = options.toNode || null;
      this.weight = options.weight || null;
      this.relationship = options.relationship || null;
      this.data = options.data || null;
      this.createdAt = new Date();
    };

    function edgeFactory() {}

    edgeFactory.prototype.addEdge = function ( options ) {
        return  new edge(options);
    };

    return new  edgeFactory();
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

})();

module.exports.EDGE = EDGE.getInstance();


