/**
 * Created by prashun on 11/29/15.
 */

var registry= require("../../../registry").get();

var COMPARATOR = (function() {

  // our instance holder
  var instance={};

  function init() {
    return {
      compare : function(data,config){
         console.log("ramos")
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

})();

module.exports.COMPARATOR = COMPARATOR.getInstance();


