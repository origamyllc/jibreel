/**
 * Created by prashun on 11/21/15.
 */
module.exports= function(node){

  var obj={
    'UID':node.id ,
    'deviceType': node.deviceType ,
    'deviceName': node.deviceName ,
    'deviceFullName':node.fullName,
    'deviceModel':node.deviceModel,
    'deviceIpVersion':4,
    'deviceBrand':node.deviceBrand,
    'deviceIP':node.deviceIP,
    'deviceMAC': node.deviceMAC,
    'createdAt': new Date().toString()
  };

  return obj;

}
