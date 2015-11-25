/**
 * Created by prashun on 11/24/15.
 */


 var COLLECTOR = (function() {

 var deviceCollectorNode = function (options) {}

  deviceCollectorNode.prototype.init() = function (options) {
    this.fullName = options.fullName || "static";
    this.url = options.url || null;
    this.pollInterval = options.pollInterval || null;
    this.source = options.source || "static";
  }

// collect data by pinging the url as per time set
// ping collector to see if online

  return deviceCollectorNode;

})();

 module.exports.COLLECTOR = COLLECTOR;
