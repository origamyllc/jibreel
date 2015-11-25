/**
 * Created by prashun on 11/24/15.
 */
exports.utils=function(promisifier) {

  CollectorUtils=this;

  CollectorUtils.validateNode = function(node){
    if(! node.url ){
      throw "The collector url can not be null"
    }
    if(! node.pollInterval){
      throw "You must define a poll interval"
    }
    if(! node.source ){
      throw "You need to define the source"
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
        console.log(node.url,node.pollInterval);
      }
    ).catch(
      function (reason) {
        console.log('Handle rejected promise (' + reason + ') here.');
      }
    )
  }

};
