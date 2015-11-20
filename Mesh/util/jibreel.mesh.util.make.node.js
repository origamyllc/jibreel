/**
 * Created by prashun on 11/17/15.
 */
exports.utils=function(app,promisifier,db,crypto) {

  Utils=this;

  Utils.validateNode=function (node){
    if(node.name === 'static'){
      throw "Please pass the node name as an option !"
    }
    else if(node.fullName==='static'){
      throw "Please pass the full name as an option !"
    }
    return node;
  }

  Utils.save = function (node){
    if(node.fullName) {
      return promisifier.when(Utils.persist(node)).then(
        console.log("sucsessfully saved the node with id : node--" + node.id + " !")
      ).catch(
        function (reason) {
          console.log('Handle rejected promise (' + reason + ') here.');
        }
      )
    }
  }

  Utils.persist=function (node){
    if(node.db === "sql"){
     // insert everything except db
     // db.sql.insert();
    }

    db.redis.set("node--" + crypto.createHash('md5').update(node.fullName).digest("hex"), JSON.stringify(node));
  }

  Utils.validate=function (node){
    promisifier.when(Utils.validateNode(node)).then(
      Utils.save(node)
    ).catch(
      function(reason) {
        console.log('Handle rejected promise ('+reason+') here.');
      })
  }

 return{
   saveNode:Utils.validate
 }
}
