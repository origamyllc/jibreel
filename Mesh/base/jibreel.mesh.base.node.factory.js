/**
 * Created by prashun on 11/9/15.
 */

var registry= require("../../registry").get();

var NODE = (function(maker) {

  // our instance holder
  var instance;

  function init() {

    function nodeFactory() {}

    nodeFactory.prototype.createNode = function ( options ) {

      if (typeof options === 'undefined') {
        options={};
        options.type="base";
      }

      switch (options.type) {
        case "base":
         throw "Thou shalt not initialize a base class!"
          break;
        case "config":
          this.node= maker.make(options);
          break;
        case "control":
          // extend with compute base
          break;
        case "compute":
          // extend with compute base
          break;
        case "commute":
          break;
      }


      //create an instance
      var node = new this.node();

     //set the values
      Object.keys(node).forEach(function(key){
        if(typeof  options[key] !== "undefined" ) {
          node[key] = options[key];
        }
      });

      console.log(node);

      return node;
    }

    return  new nodeFactory();
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };

})(registry.make);

module.exports.NODE= NODE.getInstance();

