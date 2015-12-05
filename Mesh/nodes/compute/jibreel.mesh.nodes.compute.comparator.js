/**
 * Created by prashun on 11/29/15.
 */

var registry= require("../../../registry").get();

var COMPARATOR = (function(bus,exchange) {

  // our instance holder
  var instance;

  function init() {
    return {
      compare : function(data,config){
        if(data.currentTemperatue === config.target_temperature_f){
          bus.emit("event",{"message":"shit happend !"});

          // to be moved to publish node 
          bus.on("event",function(message){
             exchange.publish("jibreel.exchange.home",message)
          });

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

})(registry.bus,registry.exchange);

module.exports.COMPARATOR = COMPARATOR.getInstance();


