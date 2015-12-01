/**
 * Created by prashun on 11/24/15.
 */
exports.utils=function(promisifier,http) {

  CollectorUtils=this;

  CollectorUtils.validateNode = function(node){
    console.log(node)
    if(! node.urlHost ){
      throw "The collector host can not be null"
    }
    if(! node.urlPath ){
      throw "The collector path can not be null"
    }
    if(! node.pollInterval){
      throw "You must define a poll interval"
    }
    return node;
  }

  CollectorUtils.validate = function(node){
    return promisifier.when(CollectorUtils.validateNode(node)).then(
      console.log("sucsessfully saved the node with id : node--" + node.id + " !")
    ).catch(
      function (reason) {
        console.log('Handle rejected promise (' + reason + ') here.');
      }
    )
  }

  CollectorUtils.stream = function (node){
    return promisifier.when(CollectorUtils.validate(node)).then(
      function(){
        var interval = setInterval(function() {
          http.stream({
            host: node.urlHost,
            path: node.urlPath
          });
        }, parseInt(node.pollInterval));
      }
    ).catch(
      function (reason) {
        console.log('Handle rejected promise (' + reason + ') here.');
      }
    )
  }
};
