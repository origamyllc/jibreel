/**
 * Created by prashun on 11/24/15.
 */


module.exports = function() {

  var deviceControllerNode = function () {}

  deviceControllerNode.prototype.init = function (bus) {
    bus.on('stream',function(data){
      console.log(data);
    });
  }

  return new deviceControllerNode();

}

