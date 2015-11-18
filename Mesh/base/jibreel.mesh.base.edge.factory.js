
var EDGE = (function() {

  // our instance holder
  var instance,models={};

  // Instance stores a reference to the Singleton
  function init() {
    return {

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


