/**
 * Created by prashun on 11/28/15.
 */
exports.utils=function(app,promisifier,db,lru) {

  EdgeUtils = this;

  EdgeUtils.validate = function(edge){
    if(!edge.fromNode){
      throw "from Node can not be null"
    }
   else if(!edge.toNode){
      throw "to Node can not be null"
    }
   else if(!edge.relationship){
      throw "to Node can not be null"
    }
  }

  function createAdjacencyList(edge){
    if(!lru.hasKey(edge.fromNode)){
      lru.set(edge.fromNode,[edge.toNode]);
      lru.set(edge.toNode,[edge.fromNode]);
    }
    else{
      lru.update(edge.fromNode,edge.toNode);
      lru.update(edge.toNode,edge.fromNode);
    }

  }

  EdgeUtils.save = function(edge){
   return  promisifier.when(EdgeUtils.validate(edge)).then(
      function() {
         createAdjacencyList(edge);
         db.redis.set(edge.fromNode.concat(edge.toNode), JSON.stringify(edge));
      }
    )
  }

  return{
    validate : EdgeUtils.save
  }

}
