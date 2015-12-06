/**
 * Created by prashun on 11/29/15.
 */

var registry= require("../../../registry").get();

var COMPARATOR = (function(bus,exchange,context,base64) {

  // our instance holder
  var instance,metadata ={};

  function init() {
    return {
      compare : function(data,config){
        this.config=JSON.parse(config);
        metadata=this.config.metadata;

        // todo create a  promise

        if(typeof metadata !== "undefined" && data[metadata.monitor] === config[metadata.against]){
            var header = base64.encode({"configId": this.config.id ,"deviceId":context.getContext().deviceId });
            var message = base64.encode({"message": metadata.successMessage});
            bus.emit("event",{"header":header,"message":message,"responseCode":200});
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


