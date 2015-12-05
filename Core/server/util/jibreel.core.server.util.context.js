/**
 * Created by prashun on 12/5/15.
 */
'use strict';

//Rename to context objext

var CONTEXT = (function() {

  var instance;

  function init() {

    var module = {
      ctx:{},
      setToContext: function(key,value) {
        this.ctx[key]=value;
      },
      getContext : function(){
        return this.ctx;
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

module.exports.CONTEXT = CONTEXT.getInstance();
