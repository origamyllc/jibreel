// Adapted from:
// https://github.com/rabbitmq/rabbitmq-tutorials/blob/master/javascript-nodejs/receive.js

var amqp = require('amqp');

var QUEUE = (function() {

	var connection =
		amqp.createConnection({
			host: 'localhost'
		});

	// our instance holder
	var instance,
      queue,
      queues;

  queues={};

// TODO save instance for each queue

	// Instance stores a reference to the Singleton
	function init() {

		return {
			create: function(name) {
				connection.on('ready', function() {
					queue = connection.queue(name, function(q) {});
          queues[name]=queue;
				});
			},
			bind: function(exchange, routingKey) {
				connection.on('ready', function() {
					queue.bind(exchange, routingKey);
				});
			},
			subscribe: function(socketio,routingKey,name) {
      queues[name].subscribe(function(message) {
           socketio.publish(routingKey, message.data.toString());
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

module.exports.QUEUE = QUEUE.getInstance();
