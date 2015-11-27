var registry=require("../../registry").get();

var COLLECTOR_HELPER = (function() {

  var instance,models={};

  function startCollector (node){
    if(node.isActive){
       registry.collectorUtil.stream(node);
    }
  }

  function stopCollector(){
     // registry.collectorUtil.stream(node);
  }


  function init() {
    return{
      stream:startCollector,
      stop:stopCollector
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
