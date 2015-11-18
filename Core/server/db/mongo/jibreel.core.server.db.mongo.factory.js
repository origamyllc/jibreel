/**
 * Created by prashun on 10/25/15.
 */
var mongoose = require('mongoose'),
path = require('path'),
  fs = require('fs');

var MONGO = (function() {

  // our instance holder
  var instance,models={};

  // Instance stores a reference to the Singleton
  function init() {
    return {
        connect:function(url){
          mongoose.connect(url);
          var db = mongoose.connection;
          db.on('error', console.error.bind(console, 'connection error:'));
          db.once('open', function(callback) {
            console.log('Connected to:' + url);
          });

          this.bootstrapModels();

        },
        bootstrapModels:function(){
          var modelsPath = path.join(__dirname, './schemas');
          fs.readdirSync(modelsPath).forEach(function(file) {
            var fileNameArray=file.split('.');
            require(modelsPath + '/' + file)(mongoose);
            var Model = mongoose.model(fileNameArray[fileNameArray.length-2]);
            models[fileNameArray[fileNameArray.length-2]]= Model;
          });
        },
         getCollections:function(){
           console.log(Object.keys(models));
           return Object.keys(models);
         },
        insert:function(name,obj){
          var instance,Model;
          models[name]=Model;
          instance=new Model(obj);
          instance.save(function (err) { // Save
            if (err) {
              console.log(err);
            }
            console.log(obj);
          });
        },
         findAll:function(name,callback){
            models[name].find({}, function (err, docs) {
              if(err){
                console.log(err);
              }
              callback(docs);
            })
         },
        findOne:function(name,criteria,callback){
          models[name].findOne(criteria , function (err, doc){
            if(err){
              console.log(err);
            }
            callback(doc);
          });
        },
        findWhere:function(name,criteria,callback){
          models[name].find(criteria , function (err, docs){
            if(err){
              console.log(err);
            }
            callback(docs);
          });
        },
        findDistinct:function(name,field, criteria, callback){
          models[name].distinct(field,criteria, function(err, results) {
            if(err){
              console.log(err);
            }
            callback(results);
          });
        },
        delete:function(name,criteria){
          models[name].remove(criteria, function (err) {
            if (err) return handleError(err);
            // removed!
          });
        },
        update:function(name,criteria,obj,callback){
           model[name].update(criteria, {
                $set: obj
              }, {
                multi: true
              },function(err, result) {

               callback(result);
              }
           );

        },
        count:function(name, criteria, callback){
          models[name].count(criteria, function(err,count){
            if(err){
              console.log(err);
            }
            callback(count);
          });
        }
    }
  }


  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };

})();

module.exports.MONGO = MONGO.getInstance();

