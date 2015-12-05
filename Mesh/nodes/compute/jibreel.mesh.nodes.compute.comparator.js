/**
 * Created by prashun on 11/29/15.
 */

var registry= require("../../../registry").get();

var COMPARATOR = (function(bus,exchange,context) {

  // our instance holder
  var instance;

  function init() {
    return {
      compare : function(data,config,options){
        if(data.currentTemperatue === config.target_temperature_f){
            var header = new Buffer({"configId":config.id ,"deviceId":context.getContext().deviceId },"base64");
            var message = new Buffer({"message":"temperature is equal !"},"base64");
            bus.emit("event",{"header":header,"message":message});
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

})(registry.bus,registry.exchange,registry.context);

module.exports.COMPARATOR = COMPARATOR.getInstance();


