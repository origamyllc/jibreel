 module.exports = function(app,bodyParser,errorHandler,favicon,cookieParser,methodOverride,session,RedisStore,logger,cors,useragent) {

   app.use(useragent.express());
    app.use(cors());

   var options = {
     host: 'localhost',
     port: 6379
   };

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({
     extended: false
   }));
   app.use(methodOverride());
   app.use(cookieParser());

   app.use(session({
     store: new RedisStore(options),
     secret: 'nyan cat'
   }));

   app.use(function(req, res, next) {
     if (!req.session) {
       return next(new Error('oh no'));// handle error
     }
     next();// otherwise continue
   });

 }
