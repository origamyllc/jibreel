/**
 * Created by prashun on 11/18/15.
 */
module.exports=function(options) {

  var deviceConfigurationNode = function (options) {}

 deviceConfigurationNode.prototype = function (options) {
     this.fullName=options.fullName || "static";
     this.deviceType = options.deviceType || "home-automation";
     this.deviceName = options.deviceName || "jibreel";
     this.deviceModel =  options.deviceModel || "static";
     this.deviceBrand =  options.deviceBrand || "Jibreel";
     this.deviceIpVersion  = options.deviceIpVersion || "v4";
     this.deviceIP = options.ip || null;
     this.deviceMAC = options.mac || null;
     this.createdAt = new Date();
  }

  return deviceConfigurationNode;
}
