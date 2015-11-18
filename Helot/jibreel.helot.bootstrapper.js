
exports.bootstrap=function(app,promisifier,options) {
// setup the factories
  var queue = require('./Rabbit/helot.rabbit.queue.factory').QUEUE;
  var exchange = require('./Rabbit/helot.rabbit.exchange.factory').EXCHANGE;
  var websocket = require('./primus/helot.primus.websocket.factory').WEBSOCKET;
  var socketio = require('./primus/helot.primus.socketio.factory').SOCKETIO;

  socketio.create(options.server, options.port);
  require('./jibreel.helot.bootstrapper.helper').bootstrap(queue, exchange, socketio, promisifier);

//setup routers
  var _websocket = require('./primus/helot.primus.websocket.routes')(websocket, app, socketio, promisifier);
  var _rabbit = require('./rabbit/helot.rabbit.routes')(queue, exchange, app, socketio, promisifier);

  websocket.create('http://localhost:5431');

//register routes
  _websocket.publish();
  _websocket.subscribe();

  _rabbit.publish();
  _rabbit.subscribe();
}
