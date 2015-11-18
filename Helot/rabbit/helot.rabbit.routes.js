/**
 * Created by prashun on 10/10/15.
 */
module.exports = function(queue,exchange,app,socketio,promisifier) {
  //TO DO: headers exchanges
  var obj={
    publish:function(){
      app.post('/rabbit/publish', function(req, res){
        promisifier.when( exchange.publish(req.body.routingkey,req.body.message)).then(
          res.status(200).send({"routingKey":req.body.routingkey,"message":req.body.message})
        ).catch(
          function(reason) {
            console.log('Handle rejected promise ('+reason+') here.');
          });
      });
    },
    subscribe:function(){
      app.post('/rabbit/subscribe', function(req, res){
        promisifier.when(queue.subscribe(socketio, req.body.routingkey,req.body.name)).then(
          res.status(200).send("subscribed to"+req.body.routingkey)
        ).catch(
          function(reason) {
            console.log('Handle rejected promise ('+reason+') here.');
          });
      });
    }
  }
  return obj;
}


