/**
 * Created by prashun on 11/17/15.
 */
module.exports = function(app,promisifier,util,Factory,edgeUtil,collectorUtil) {
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
         Factory.readNode(req.body.options.fullName , function (node) {
           res.status(200).send(node)
         });
       });
     },
    addEdge : function(){
      app.post('/mesh/create/edge', function (req, res) {
        Factory.addEdge(req.body.options, function (edge) {
          edgeUtil.validate(edge);
          res.status(200).send(edge)
        });
      });
    },
    getAdjacentNodes : function(){
      app.get('/mesh/node/get/adjacent/:fullName', function (req, res) {
        Factory.getAdjacentNodes(req.params.fullName, function (adjacentNodes) {
          res.status(200).send(adjacentNodes);
        });
      });
    },
    switch : function(){
      app.get('/mesh/collector/:flag', function (req, res) {
        collectorUtil.toggle(req.params.flag);
        // toggle on the reciever too

        res.status(200).send("collector turned" + req.params.flag );
      })
    },
    simulate : function(){
      app.get('/mesh/simulate/temperature', function (req, res) {
        res.status(200).send({"currentTemperatue":25,"unit":"f"})
      })
     }
    }

  return obj;
}


