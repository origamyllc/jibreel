var registry=require("../../registry").get();


var CONFIG_HELPER = (function(base,fractals,path,fs,collector) {

  var instance,nodes={};
  var self=this;

  var configPath = path.join(__dirname, '../nodes/config');

  nodes["base"]=base;
  nodes["collector"]=collector;

  bootstrapFoldersAtPath(configPath);

  function bootstrapFoldersAtPath(path){
    fs.readdirSync(path).forEach(function(file) {
      var fileNameArray=file.split('.');
      nodes[fileNameArray[fileNameArray.length-2]]=require(configPath + '/' + file);
    });
  }

  function init() {

    function createConfiguration(options){
      switch (options.type) {
        case "temperature":
          self.node = fractals.extend(nodes["base"](options),nodes["temperature"](options));
          break;
        case "smoke-alarm":
          self.node = nodes["base"];
          break;
        case "device":
          self.node = fractals.extend(function (){this.db="sql",this.schema="device"},nodes["device"](options));
          break;
        case "collector":
          self.node = fractals.extend(nodes["base"](options),nodes["collector"](options));
          break;
        case "control":
          self.node = fractals.execute( nodes["base"](options));
          break;
        case undefined:
          self.node = fractals.execute(nodes["base"](options));
          break;
      }

      return  self.node;
    };


    return{
      make:createConfiguration
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

})(registry.baseNode,registry.fractals,registry.path,registry.fs,registry.collector);


module.exports.CONFIG_HELPER = CONFIG_HELPER.getInstance();


