'use strict';

var http = require('http');
var Primus = require('primus');

var WEBSOCKET= (function() {

	// our instance holder
	var instance;
  var client;

  // Instance stores a reference to the Singleton
	function init() {
		return {
            create:function(url){
              var socket = new Primus.createSocket();
              client = socket(url);
              console.log("Websocket at "+url+" successfully created");
            },
            publish:function(message){
                client.write(message);
            },
            subscribe:function(routingkey){
              var data=client.on('data', function(data) {
                return data;
              });
              return  {"routingKey":routingkey,"data":data.buffer[0]};
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

module.exports.WEBSOCKET = WEBSOCKET.getInstance();
