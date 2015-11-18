// Adapted from:
// https://github.com/rabbitmq/rabbitmq-tutorials/blob/master/javascript-nodejs/receive.js

var amqp = require('amqp');

var EXCHANGE = (function() {

	var connection =
		amqp.createConnection({
			host: 'localhost'
		});

	// our instance holder
	var instance;

	var exchange;

	// Instance stores a reference to the Singleton
	function init() {

		return {
			create: function(name,options) {
			  connection.on('ready', function() {
					exchange = connection.exchange(name,options, function(exchange) {
						console.log('Exchange ' + exchange.name + ' is now open');
					});
				});
			},
			publish: function(routingKey,message) {
				 exchange.publish(routingKey, message) ;
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

module.exports.EXCHANGE = EXCHANGE.getInstance();
