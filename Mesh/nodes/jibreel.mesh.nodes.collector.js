/**
 * Created by prashun on 11/24/15.
 */

// collect data by pinging the url as per time set
// ping collector to see if online
// should return byte stream and checksum


module.exports=function(options) {

  var deviceCollectorNode = function (options) {}

  deviceCollectorNode.prototype = function (options) {
    this.fullName = options.fullName || "static";
    this.url = options.url || null;
    this.pollInterval = options.pollInterval || null;
    this.source = options.source || "static";
  }

  return deviceCollectorNode;
}
