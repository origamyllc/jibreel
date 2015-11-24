
var redis = require("redis"),
  client = redis.createClient();

var REDIS = (function() {

  // our instance holder
  var instance;

  // Instance stores a reference to the Singleton
  function init() {
    return {
      get: function (key,callback) {
        client.get("nanchakoo", function (err, reply) {
           return callback(reply);
        });
      },
      set: function (key,value) {
         client.set(key,value);
      },
      hmset:function(key,value){
        client.hmset(key,value)
      },
      hmget: function (key,callback) {
        client.hgetall(key, function (err, reply) {
          return callback(reply);
        });
      },
      del:function(key){
        client.del(key);
      },
      clear:function(){
        client.flushdb();
      },
      size:function(callback){
        return callback(client.dbsize());
      },
      mget:function(array,callback){
        client.mget(array, function (err, reply) {
          return callback(reply);
        });
      },
      update:function(key,value){

      },
      subscribe:function(callback){
        client.on("message", function (channel, message) {
          callback(channel,message)
        });
      },
      publish:function(channel,message){
        client.publish(channel,message,function(){
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

module.exports.REDIS = REDIS.getInstance();

