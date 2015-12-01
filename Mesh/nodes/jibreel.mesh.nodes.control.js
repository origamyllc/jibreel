/**
 * Created by prashun on 11/24/15.
 */


module.exports = function() {

  var deviceControllerNode = function () {}

  deviceControllerNode.prototype.getStream = function () {
     console.log("Hot line Bling !! ")
  }

  return new deviceControllerNode();

}

