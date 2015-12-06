/**
 * Created by prashun on 11/17/15.
 */
module.exports=function(options){

  // To Do code cleanup
  var Node= function (options){
    this.id=options.id || "";
    this.name= options.name || "static";
    this.fullName=options.fullName || "static";
    this.metadata=options.metadata || null;
    this.locale=options.locale || "en-america";
    this.version=options.version || "0.0.0";
    this.type=options.type || "base";
    this.isActive=true;
    this.location=options.location || {};
    this.createdAt=new Date();
  }

  return Node;
}
