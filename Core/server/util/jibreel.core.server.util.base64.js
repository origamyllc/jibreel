/**
 * Created by prashun on 12/5/15.
 */
'use strict';

//Rename to context objext

var BASE64 = (function() {

  var instance;

  function init() {

    var module = {
      encode: function(value) {
        if(typeof value === "object" ){
          value = JSON.stringify(value);
        }
        var buffer = new Buffer(value);
        var toBase64 = buffer.toString('base64');
        return toBase64;
      },
      decode : function(string){
        var buffer = new Buffer(string, 'base64');
        var toAscii = buffer.toString('ascii');
        return toAscii;
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

module.exports.BASE64 = BASE64.getInstance();
