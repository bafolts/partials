shards.define(["shards/page", "shards/util"], function (page, util) {

  var examplePage = util.extend(page, function (config) {
  
  });
  
  examplePage.prototype.init = function () {
    examplePage.superclass.init.call(this);
    
    console.log("[example page module init]");
  }

  return examplePage

})