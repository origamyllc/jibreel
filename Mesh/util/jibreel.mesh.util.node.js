/**
 * Created by prashun on 11/17/15.
 */
exports.utils=function(app,promisifier,db,crypto) {

  function validateNode(node){

    if(node.name === 'static'){
      throw "Please pass the node name as an option !"
    }
    else if(node.fullName==='static'){
      throw "Please pass the full name as an option !"
    }
    return node;
  }

  function save(node){
    return  promisifier.when( db.redis.set("node--"+crypto.createHash('md5').update(node.fullName).digest("hex"),JSON.stringify(node))).then(
      console.log("sucsessfully saved the node with id : node--"+node.id+" !"),
      console.log(node)
    ).catch(
      function(reason){
        console.log('Handle rejected promise ('+reason+') here.');
      }
    )
  }

  function validate(node){
    promisifier.when(validateNode(node)).then(
      save(node)
    ).catch(
      function(reason) {
        console.log('Handle rejected promise ('+reason+') here.');
      })
  }

 return{
   saveNode:validate
 }
}
