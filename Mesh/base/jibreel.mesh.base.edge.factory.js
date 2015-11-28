
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

    function edgeFactory() {}

    edgeFactory.createEdge = function ( options ) {
      this.fromNode = options.fromNode || null;
      this.toNode = options.toNode || null;
      this.weight = options.weight || null;
      this.relationship = options.relationship || null;
      this.data = options.data || null;
      this.createdAt = new Date();
    };

    return {
      addEdge : createEdge
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

})();

module.exports.EDGE = EDGE.getInstance();


