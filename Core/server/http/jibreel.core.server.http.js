/**
 * Created by prashun on 11/25/15.
 */


var registry = require('../../../registry').get()

var http = require('http');

var HTTP = (function(bus) {

  var instance,models={};

  var callback = function(response) {
      response.on('data', function (chunk) {
        bus.emit('stream',chunk);
        bus.on('stream',function(data){
          console.log(data);
        });
      });
    }

  function init() {
    return {
       stream:function(options){
         http.request(options, callback).end();
       }
    }
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };

})(registry.bus);

module.exports.HTTP = HTTP.getInstance();
