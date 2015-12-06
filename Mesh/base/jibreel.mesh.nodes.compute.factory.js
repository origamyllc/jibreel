/**
 * Created by prashun on 12/5/15.
 */
/**
 * Created by prashun on 12/5/15.
 */
'use strict';

//Rename to context objext
var registry= require("../../registry").get();

var COMPUTE = (function() {

  var instance;

  var path=require('path'),fs = require('fs'),nodes={};
  var computePath = path.join(__dirname, '../nodes/compute');

  fs.readdirSync(computePath).forEach(function(file) {
    var fileNameArray=file.split('.');
    nodes[fileNameArray[fileNameArray.length-2]]=require(computePath + '/' + file);
  });

  function init() {

    var module = {
      getNode : function(type,data,config) {
        if(type === "comparator") {
          nodes["comparator"].compare(data, config);
        }
      }
    };
    return module;
  };

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };

})();

// Usage:

module.exports.COMPUTE = COMPUTE.getInstance();
