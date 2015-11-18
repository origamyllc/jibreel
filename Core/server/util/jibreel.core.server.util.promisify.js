
module.exports = function(Promise) {
  return {
     when:function when(cb) {
       return new Promise(function (resolve) {
         resolve(cb);
       });
     }
  }
};
