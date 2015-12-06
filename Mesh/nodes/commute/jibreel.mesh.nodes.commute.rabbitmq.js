/**
 * Created by prashun on 11/29/15.
 */

var registry= require("../../../registry").get();

var PUBLISH_SUBSCRIBE = (function(bus,exchange) {

  // our instance holder
  var instance,metadata ={};

  function init() {
     bus.on("event",function(data){
         console.log(data);
        exchange.publish("jibreel.exchange.home",data);
     });
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

module.exports.PUBLISH_SUBSCRIBE = PUBLISH_SUBSCRIBE.getInstance();


