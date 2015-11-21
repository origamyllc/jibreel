exports.bootstrap = function( app, promisifier) {

  //setup redis
  var redis = require('./redis/jibreel.core.server.db.redis.factory').REDIS;
  var _redis = require('./redis/jibreel.core.server.db.redis.routes.js')(redis, app, promisifier);
  _redis.set();
  _redis.get();
  _redis.hmset();
  _redis.hmget();

  //setup Mongo
  var mongo = require('./mongo/jibreel.core.server.db.mongo.factory').MONGO;
  mongo.connect("mongodb://accountUser:password@localhost:27017/jibreel");

  //setup sql
  var sql = require('./sql/jibreel.core.server.db.sql.factory').SQL;
  sql.connect('mysql://jibreel:gerbil@localhost/test');


   return {
     redis:redis,
     mongo:mongo,
     sql:sql
   }
}
