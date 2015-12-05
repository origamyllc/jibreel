/**
 * Created by prashun on 11/29/15.
 */

var registry= require("../../../registry").get();

var COMPARATOR = (function(bus) {

  // our instance holder
  var instance;

  function init() {
    return {
      compare : function(data,config){
        if(data.currentTemperatue === config.target_temperature_f){
          bus.emit("event",{"message":"shit happend!"});
        }
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

})(registry.bus);

module.exports.COMPARATOR = COMPARATOR.getInstance();


