/**
 * Created by prashun on 11/17/15.
 */
exports.utils=function(app,promisifier,db) {

  var path=require('path'),fs = require('fs'),nodes={};
  var transformerPath = path.join(__dirname, '../transformers');

  fs.readdirSync(transformerPath).forEach(function(file) {
    var fileNameArray=file.split('.');
    nodes[fileNameArray[fileNameArray.length-2]]=require(transformerPath + '/' + file);
  });

  Utils = this;

  Utils.validateNode = function (node){
    if(node.name === 'static'){
      throw "Please pass the node name as an option !"
    }
    else if(node.fullName ==='static'){
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

  Utils.persist = function (node){
    if(node.db === "sql" && nodes[node.schema]) {
      db.sql.insert(node.schema, nodes[node.schema](node));
      // should calculate hash of the  node full name and set it as the key
      db.redis.set(node.fullName , JSON.stringify( nodes[node.schema](node)));
    }
    else {
      // should calculate hash of the node fullname  and set it as the key
      db.redis.set(node.fullName, JSON.stringify(node));
    }
  }

  Utils.validate = function (node){
    promisifier.when(Utils.validateNode(node)).then(
      Utils.save(node)
    ).catch(
      function(reason) {
        console.log('Handle rejected promise ('+reason+') here.');
      })
  }

  Utils.readNode = function(fullName){
    return db.redis.get(fullName,function(reply){
      promisifier.when(reply).then(
        function(value){
          console.log(value);
          return value;
        }
      ).catch(
        function(reason) {
          console.log('Handle rejected promise ('+reason+') here.');
        })
    })
  }

 return{
   saveNode:Utils.validate,
   readNode: Utils.readNode
 }
}
