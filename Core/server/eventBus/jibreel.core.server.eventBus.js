/**
 * Created by prashun on 11/27/15.
 */

var EVENT_BUS = (function() {

  var instance,models={};
  var events = require("events");
  var EventEmitter = require("events").EventEmitter;

  function init() {
     var ee = new EventEmitter();
     return ee;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };

})();

module.exports.EVENT_BUS = EVENT_BUS.getInstance();



