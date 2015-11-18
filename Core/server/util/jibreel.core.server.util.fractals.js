module.exports =  {
  extend : function (destination, source) {
    var src = function(){
      destination.call(this,arguments);
      source.prototype.call(this,arguments);
    };
    return src;
  }

};
