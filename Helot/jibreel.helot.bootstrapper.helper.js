/**
 * Created by prashun on 10/21/15.
 */
exports.bootstrap=function(queue,exchange,socketio,promisifier){
  var validKeys=["exchanges","queues"];
  Object.keys(require("./manifest.json")).forEach(function(key){
    if(validKeys.indexOf(key) != -1){
         require("./manifest.json")[key].forEach(function(value){
           if(value.name.split(".")[1]==="exchange"){
             promisifier.when(exchange.create(value.name,value.options)).then(
                console.log("Exchange "+ value.name+" successfully created")
             ).catch(
               function(reason) {
                 console.log('Handle rejected promise ('+reason+') here.');
               });
           }
          else if(value.name.split(".")[1]==="queue"){
             promisifier.when(createQ( queue,socketio,value)).then(
               console.log("Queue "+ value.name+" successfully created")
             ).catch(
               function(reason) {
                 console.log('Handle rejected promise ('+reason+') here.');
               });
           };
         })
      }
  });

  function createQ(queue,socketio,value) {
    queue.create(value.name, value.options);
    queue.bind(value.binding.exchange, value.binding.key);
    socketio.subscribe(value.binding.key);
  }
}
