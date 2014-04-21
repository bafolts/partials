define(["partials/partial", "partials/util"], function(p_mPartial, p_mUtil) {

  p_mUtil.namespace("partials");

  partials.page = function () {

    partials.page.superclass.constructor.call(this)
  };
  p_mUtil.extend(partials.partial, partials.page);
  
  partials.page.prototype.init = function () {
    partials.page.superclass.init.call(this)
    
    console.log("page loaded")

  }
  
  return partials.page;

})