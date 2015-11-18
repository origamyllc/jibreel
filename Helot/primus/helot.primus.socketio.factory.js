/**
 * Created by prashun on 10/11/15.
 */

var SOCKETIO= (function() {

  // our instance holder
  var instance;

  var ioc = require( 'socket.io-client' );
  var io,client;

  // Instance stores a reference to the Singleton
  function init() {
    return {
      create:function(server,port){
        io = require( 'socket.io' ).listen( server );
        client = ioc.connect( "http://localhost:" + port );
      },
      publish:function(channel,msg){
        client.emit(channel,msg , function ( message ) {
          console.log( 'Socket.io Server Recieved:::', message );
        });
      },
      subscribe:function(channel){
        io.sockets.on( "connection", function ( socket ) {
          socket.on( channel, function ( msg, callback ) {
            console.log(' Recieved: message from Socket.io Server:::'+msg)
            callback( msg );
          });
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

module.exports.SOCKETIO = SOCKETIO.getInstance();
