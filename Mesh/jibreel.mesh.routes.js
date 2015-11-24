/**
 * Created by prashun on 11/17/15.
 */
module.exports = function(app,promisifier,util,Factory) {
  var obj ={
      createNode:function(){
        app.post('/mesh/create/node', function (req, res) {
          Factory.createNode(req.body.options, function (node) {
            promisifier.when(node).then(
              util.saveNode(node),
              res.status(200).send("sucessfully posted data  !")
            ).catch(
              function () {
                throw "Node not created !";
              }
            )
          });
        });
      },
     readNode:function(){
       app.post('/mesh/read/node', function (req, res) {
         Factory.readNode(req.body.options , function (node) {
           res.status(200).send(node)
         });
       });
     }
  }
  return obj;
}


