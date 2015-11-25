var registry=require("../../registry").get();

var COLLECTOR_HELPER = (function() {

  // our instance holder
  var instance,models={};

  // Instance stores a reference to the Singleton

  function streamData (options){
    if(options.isActive){
     console.log(registry.collectorUtil);
      console.log(options.url,options.pollInterval)
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
