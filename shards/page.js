shards.define(["shards/shard", "shards/util"], function(shard, util) {

  var page = function (oConfig) {
  
    page.superclass.constructor.call(this)
  };
  
  util.extend(shard, page);
  
  page.prototype.init = function () {
    page.superclass.init.call(this)
    
  }
  
  return page;

})