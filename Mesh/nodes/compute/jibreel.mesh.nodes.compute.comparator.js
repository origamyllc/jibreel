/**
 * Created by prashun on 11/29/15.
 */

var registry= require("../../../registry").get();

var COMPARATOR = (function(bus,exchange,context) {

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

           // todo  create base64 encoder decoder

            var header = new Buffer({"configId": this.config.id ,"deviceId":context.getContext().deviceId },"base64");
            var message = new Buffer({"message": options.message},"base64");
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


