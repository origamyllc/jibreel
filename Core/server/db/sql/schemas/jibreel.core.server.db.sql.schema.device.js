'use strict';

module.exports = function(db) {

  var Device = db.define("device",  {
    UID:{ type: 'integer' },
    deviceType:String,
    deviceName :String,
    deviceFullName:String,
    deviceBrand :String,
    deviceModel:String,
    deviceIP:String,
    deviceIpVersion:String,
    deviceMAC:String,
    createdAt:String
  });

  return Device;
};
