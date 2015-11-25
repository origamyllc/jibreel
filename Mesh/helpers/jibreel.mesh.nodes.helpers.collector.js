var registry=require("../../registry").get();

var COLLECTOR_HELPER = (function() {

  // our instance holder
  var instance,models={};

  // Instance stores a reference to the Singleton

  function streamData (node){
    if(node.isActive){
       registry.collectorUtil.validate(node);
       console.log(node.url,node.pollInterval);
    }
  }

  function ping(){}

  function init() {
    return{
      stream:streamData,
      ping:ping
    }
  }

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance : function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };

})();

module.exports.COLLECTOR_HELPER = COLLECTOR_HELPER.getInstance();


/**
 * Created by prashun on 11/24/15.
 */
