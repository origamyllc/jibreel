'use strict';

var express = require('express'),
  Primus = require('primus'),
  bodyParser = require('body-parser'),
  errorHandler = require('errorhandler'),
  favicon = require('serve-favicon'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  RedisStore = require('connect-redis')(session),
  cors=require('cors'),
  useragent = require('express-useragent'),
  Promise = require('bluebird'),
  http = require('http'),
  lru=require('./Core/server/cache/lru/jibreel.core.server.cache.lru.factory').LRU,
  app = express();

//setup utils
var  logger = require('./Core/server/config/jibreel.core.server.config.logger');
var promisifier= require('./Core/server/util/jibreel.core.server.util.promisify.js')(Promise);

//set up servers
var port = 9000;
var server = http.createServer(app).listen( port);
var primus = new Primus(server, {
  transformer: 'websockets'
});

//setup express
require('./Core/server/config/jibreel.core.server.config.express')(app,bodyParser,errorHandler,favicon,cookieParser,methodOverride,session,RedisStore,logger,cors,useragent);

//setup db
var db=require('./Core/server/db/jibreel.core.server.db.bootstrapper').bootstrap();

//setup helot
require('./Helot/jibreel.helot.bootstrapper').bootstrap(app,promisifier,{"server":server,"port":port});

//setup mesh
require('./Mesh/jibreel.mesh.bootstrapper').bootstrap(app,promisifier,db);


app.listen(3000, function () {});
