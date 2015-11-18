/**
 * Created by prashun on 10/10/15.
 */
module.exports = function(websocket,app,socketio,promisifier) {
  var obj={
    publish:function(){
      app.post('/websocket/publish', function(req, res){
        promisifier.when(websocket.publish(req.body.message)).then(
          res.status(200).send({"routingKey":req.body.routingkey,"message":req.body.message})
        ).catch(
          function(reason) {
            console.log('Handle rejected promise ('+reason+') here.');
          });
      });
    },
    subscribe:function(){
      app.get('/websocket/subscribe', function(req, res){
        res.status(200).send(websocket.subscribe(req.body.routingkey));
      });
    }
  }

  return obj;
}
