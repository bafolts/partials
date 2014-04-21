define(["partials/util"], function(p_mUtil) {

  p_mUtil.namespace("partials.partial");

  partials.partial = function () {
  
  }

  partials.partial.prototype.init = function () {
    console.log("partial loaded");
  }

  return partials.partial;

})