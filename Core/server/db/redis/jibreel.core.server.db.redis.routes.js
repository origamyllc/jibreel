module.exports = function(redis,app,promisifier) {

  var obj = {
   set : function () {
      app.post('/redis/set', function (req, res) {
        promisifier.when(redis.set(req.body.key, req.body.value)).then(
           res.status(200).send({"key":req.body.key,"value":req.body.value})
        ).catch(
          function (reason) {
            console.log('Handle rejected promise (' + reason + ') here.');
          });
      });
    },
    get: function () {
      app.post('/redis/get', function (req, res) {
        promisifier.when( getFromRedis(req.body.key,req,res)).then(
        ).catch(
          function (reason) {
            console.log('Handle rejected promise (' + reason + ') here.');
          });
      });
    },
    hmset : function () {
      app.post('/redis/hmset', function (req, res) {
        promisifier.when(redis.set(req.body.key, req.body.value)).then(
          res.status(200).send({"key":req.body.key,"value":req.body.value})
        ).catch(
          function (reason) {
            console.log('Handle rejected promise (' + reason + ') here.');
          });
      });
    },
    hmget : function () {
      app.post('/redis/hmget', function (req, res) {
        promisifier.when( getFromRedis(req.body.key,req,res)).then(
        ).catch(
          function (reason) {
            console.log('Handle rejected promise (' + reason + ') here.');
          });
      });
    },
    del:function(){
      app.post('/redis/del', function (req, res) {
        promisifier.when( redis.del(req.body.key)).then(
        ).catch(
          function (reason) {
            console.log('Handle rejected promise (' + reason + ') here.');
          });
      });
    }
  }
  return obj;

  function getFromRedis(key,req,res){
    redis.get(req.body.key, function (result) {
      res.status(200).send({"key":req.body.key,"value":result})
    });
  }
}

