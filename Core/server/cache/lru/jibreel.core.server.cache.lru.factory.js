var LRUCache = require('lrucache');
var cache = LRUCache(100);

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
        cache.remove(key);
      },
      clear:function(){
        cache.removeAll();
      },
      update:function(key,value){
        cache.update(key, function (a) {
          a.push(value);
          return a
        });
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
