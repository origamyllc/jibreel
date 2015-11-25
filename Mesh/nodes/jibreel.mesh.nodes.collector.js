/**
 * Created by prashun on 11/24/15.
 */


  module.exports = function(options) {

  var deviceCollectorNode = function (options) {
  }

  deviceCollectorNode.prototype = function (options) {
    this.fullName = options.fullName || "static";
    this.url = options.url || null;
    this.pollInterval = options.pollInterval || null;
    this.source = options.source || "static";
  }

  return deviceCollectorNode;

}
