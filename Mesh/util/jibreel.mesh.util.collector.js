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
    return promisifier.when(Utils.validateNode(node)).then(
      console.log("sucsessfully saved the node with id : node--" + node.id + " !")
    ).catch(
      function (reason) {
        console.log('Handle rejected promise (' + reason + ') here.');
      }
    )
  }

};
