var registry=require("../../registry").get();


var CONFIG_HELPER = (function(base,fractals) {

  // our instance holder
  var instance,models={};


  var path=require('path'),fs=require('fs'),nodes={};
  var configPath = path.join(__dirname, '../nodes/config');
  var util = require('../util/jibreel.mesh.util.configHelperUtils');

  nodes["base"]=base;

  fs.readdirSync(configPath).forEach(function(file) {
    var fileNameArray=file.split('.');
    nodes[fileNameArray[fileNameArray.length-2]]=require(configPath + '/' + file);
  });


  function createConfiguration(options){
    switch (options.subType) {
      case "temperature":
        this.node = fractals.extend(nodes["base"](options),nodes["temperature"](options));
        break;
      case "smoke-alarm":
        this.node = nodes["base"];
        break;
      case "device":
        this.node = fractals.extend(function (){this.db="sql",this.schema="device"},nodes["device"](options));
        break;
      case undefined:
        this.node = nodes["base"];
        break;
    }
    return  this.node;
  };

  function readNode(fullName){
    util.readNode(fullName);
  }


  // Instance stores a reference to the Singleton
  function init() {
    return{
      make:createConfiguration,
      read:readNode
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

})(registry.base,registry.fractals);

module.exports.CONFIG_HELPER = CONFIG_HELPER.getInstance();


