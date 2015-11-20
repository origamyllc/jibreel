/**
 * Created by prashun on 11/17/15.
 */
module.exports=function(){

  var path=require('path'),fs=require('fs'),nodes={};
  var configPath = path.join(__dirname, './config');
  var base =require("./jibreel.mesh.nodes.base");
  var fractals = require('../../Core/server/util/jibreel.core.server.util.fractals');

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
        this.node = fractals.extend(function (){this.db="sql"},nodes["device"](options));
        break;
      case undefined:
        this.node = nodes["base"];
        break;
    }

    return  this.node;
  };

  return{
    make:createConfiguration
  }
}
