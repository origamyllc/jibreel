

var SQL = (function() {

  // our instance holder
  var instance,models={},Model,fileNameArray,
    path = require('path'),
    fs = require('fs');

  var relational = require('orm');

  // Instance stores a reference to the Singleton
  function init() {

    return {
         connect:function(url,callback){
            var db=  relational.connect(encodeURI(url) , function(err, db) {
                console.log('Connected to:' + url);
                return db;
              });

           this.bootstrapModels(db);
         },
         bootstrapModels:function(db){
             var modelsPath = path.join(__dirname, './schemas');
            fs.readdirSync(modelsPath).forEach(function(file) {
               fileNameArray=file.split('.');
               Model=require(modelsPath + '/' + file)(db);
               models[fileNameArray[fileNameArray.length-2]]= Model;
             });
         },
         getCollections:function(){
           return Object.keys(models);
         },
         insert:function(name,obj){
           models[name].create(obj, function(err) {
             if (err) {
               console.log(err);
             }
             console.log(obj);
           });
         },
         findAll:function(name,callback){
           var results={};
           models[name].find({}, function(err, objs) {
             if (err) {
               console.log(err);
             }
             objs.forEach(function(obj){
               Object.keys(obj).forEach(function(keys){
                 results[keys]=obj[keys];
               });
             });
             callback(results);
           });
         },
        findOne:function(name,criteria,callback){
          var results={};
          models[name].find(criteria , function(err, obj) {
            if (err) {
              console.log(err);
            }
            Object.keys(obj[0]).forEach(function(keys){
              results[keys]=obj[0][keys];
            });
            callback(results);
          });
        },
        findWhere:function(name,criteria,callback){
          var results={};
          models[name].find(criteria, function(err, objs) {
            if (err) {
              console.log(err);
            }
            objs.forEach(function(obj){
              Object.keys(obj).forEach(function(keys){
                results[keys]=obj[keys];
              });
            });
            callback(results);
          });
        },
        delete:function(name,criteria){
          models[name].find(criteria).remove(function(err) {
            if (err) {
              console.log(err);
            }
          });
        },
        update:function(name,obj){
          models[name].get(1, function (err, toBeUpdated) {
            toBeUpdated.save(obj, function (err) {
              if (err) {
                console.log(err);
              }
              console.log("saved!");
            });
          });
        },
        count:function(name, criteria, callback){
          models[name].count(criteria, function (err, count) {
            console.log("We have %d Does in our db", count);
            if (err) {
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

module.exports.SQL = SQL.getInstance();

