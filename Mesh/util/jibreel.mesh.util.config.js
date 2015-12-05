/**
 * Created by prashun on 11/17/15.
 */
exports.utils=function(app,promisifier,db,context) {

  var path=require('path'),fs = require('fs'),nodes={};
  var transformerPath = path.join(__dirname, '../transformers');

  fs.readdirSync(transformerPath).forEach(function(file) {
    var fileNameArray=file.split('.');
    nodes[fileNameArray[fileNameArray.length-2]]=require(transformerPath + '/' + file);
  });

  ConfigUtils = this;

  ConfigUtils.validateNode = function (node){
    if(node.name === 'static'){
      throw "Please pass the node name as an option !"
    }
    else if(node.fullName ==='static'){
      throw "Please pass the full name as an option !"
    }
    return node;
  }

  ConfigUtils.save = function (node){
      return promisifier.when(ConfigUtils.persist(node)).then(
        console.log("sucsessfully saved the node with id : node--" + node.id + " !")
      ).catch(
        function (reason) {
          console.log('Handle rejected promise (' + reason + ') here.');
        }
      )

  }

  ConfigUtils.persist = function (node){
    if(node.db === "sql" && nodes[node.schema]) {
      context.setToContext("deviceId",node.id);
      db.sql.insert(node.schema, nodes[node.schema](node));
      // should calculate hash of the  node full name and set it as the key
      db.redis.set(node.fullName , JSON.stringify( nodes[node.schema](node)));
    }
    else {
      // should calculate hash of the node fullname  and set it as the key
      db.redis.set(node.fullName, JSON.stringify(node));
    }
  }

  ConfigUtils.validate = function (node){
    promisifier.when(ConfigUtils.validateNode(node)).then(
      ConfigUtils.save(node)
    ).catch(
      function(reason) {
        console.log('Handle rejected promise ('+reason+') here.');
      })
  }


 return{
   saveNode:ConfigUtils.validate
 }
}
