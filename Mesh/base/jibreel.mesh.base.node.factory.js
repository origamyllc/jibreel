/**
 * Created by prashun on 11/9/15.
 */

var registry= require("../../registry").get();

var NODE = (function(maker,collector) {

  var instance;

  function init() {

    function nodeFactory() {}

    nodeFactory.createNode = function ( options ) {

      if (typeof options === 'undefined') {
        options={};
        options.type="base";
      }

      if(options.type !== "base"){
        this.node = maker.make(options);
      }

      //create an instance
      var node = new this.node();

     //set the values
      Object.keys(node).forEach(function(key){
        if(typeof  options[key] !== "undefined" ) {
          node[key] = options[key];
        }
      });

      switch (options.type) {
        case "base":
          throw "Thou shalt not initialize a base class!"
          break
        case "collector":
          collector.stream(node);
          break;
      }

      return node;
    }


    nodeFactory.readNode = function ( fullName ,callback) {

      maker.read(fullName ,function(result){
         console.log(result)
         return callback(result);
      })

    }

    return nodeFactory;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = new init();
      }
      return instance;
    }
  };

})(registry.make,registry.collect);

module.exports.NODE= NODE.getInstance();


