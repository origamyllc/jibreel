/**
 * Created by prashun on 11/29/15.
 */

var registry= require("../../../registry").get();

var COMPARATOR = (function(bus,exchange,context,base64) {

  // our instance holder
  var instance;

  //todo  move to compute options node

  var options ={
    "compareField":"currentTemperatue",
    "withField":"target_temperature_f",
    "message":"temperature is same"
  };

  function init() {
    return {
      compare : function(data,config){
        this.config=JSON.parse(config);
        if(data[options.compareField] === config[options.withField]){
            var header = base64.encode({"configId": this.config.id ,"deviceId":context.getContext().deviceId });
            var message = base64.encode({"message": options.message});
           // bus.emit("event",{"header":header,"message":message});
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

})(registry.bus,registry.exchange,registry.context,registry.base64);

module.exports.COMPARATOR = COMPARATOR.getInstance();


