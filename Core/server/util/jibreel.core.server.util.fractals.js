module.exports =  {
  extend : function (firstClass, secondClass) {
    var src = function(){
      firstClass.call(this,arguments);
      secondClass.prototype.call(this,arguments);
    };
    return src;
  },
  execute:function (self) {
    var src = function(){
      self.prototype.call(this,arguments);
    };
    return src;
  },
  mix:function (obj1,obj2){

  }
};
