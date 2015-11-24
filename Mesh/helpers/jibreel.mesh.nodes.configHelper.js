var registry=require("../../registry").get();


var CONFIG_HELPER = (function(base,fractals,path,fs,helper) {

  var instance,nodes={};

  var configPath = path.join(__dirname, '../nodes/config');

  nodes["base"]=base;

  fs.readdirSync(configPath).forEach(function(file) {
    var fileNameArray=file.split('.');
    nodes[fileNameArray[fileNameArray.length-2]]=require(configPath + '/' + file);
  });


  function init() {

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
      if(typeof helper.readNode(fullName) !== 'undefined' ) {
        return helper.readNode(fullName);
      }
    }

    return{
      make:createConfiguration,
      read:readNode
    }
  }


  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };

})(registry.base,registry.fractals,registry.path,registry.fs,registry.configUtil);



module.exports.CONFIG_HELPER = CONFIG_HELPER.getInstance();


