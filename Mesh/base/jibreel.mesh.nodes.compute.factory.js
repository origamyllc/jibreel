/**
 * Created by prashun on 12/5/15.
 */
/**
 * Created by prashun on 12/5/15.
 */
'use strict';

//Rename to context objext
var registry= require("../../registry").get();

var COMPUTE = (function() {

  var instance;

  function init() {

    var module = {
      getNode : function(type,data, config) {
        if(type === "comparator") {
          return  registry.comparator.compare(data, config);
        }
      }
    };
    return module;
  };

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };

})();

// Usage:

module.exports.COMPUTE = COMPUTE.getInstance();
