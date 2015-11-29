var LRUCache = require('lru-cache');
var cache = LRUCache(1000);

var LRU = (function() {

  // our instance holder
  var instance;

  // Instance stores a reference to the Singleton
  function init() {
    return {
      get: function (key,callback) {;
        callback(cache.get(key));
      },
      set: function (key,value) {
        cache.set(key,value);
      },
      del:function(key){
        cache.del(key);
      },
      clear:function(){
        cache.reset();
      },
      update:function(key,value){
        cache.get(key).push(value);
      },
      hasKey : function(key){
         return cache.has(key);
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

})();

module.exports.LRU = LRU.getInstance();

/**
 * Created by prashun on 10/25/15.
 */
