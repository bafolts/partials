
define(function() {

  return {
    namespace: function (p_sNamespace, p_oRootObject) {

      if(this.isUndefined(p_oRootObject)) {
        p_oRootObject = window;
      }

      var aNamespaces = p_sNamespace.split(".");
      
      for(var i = 0, len = aNamespaces.length; i<len; i++) {
        p_oRootObject = p_oRootObject[aNamespaces[i]] = p_oRootObject[aNamespaces[i]] || {};
      
      }

      return p_oRootObject;

    },
    
    extend: function (p_oBaseObject, p_oInheritingObject) {
      var c = function(){};
      c.prototype = p_oBaseObject.prototype;
      p_oInheritingObject.prototype = new c();
      p_oInheritingObject.prototype.constructor = p_oInheritingObject;
      p_oInheritingObject.superclass = p_oBaseObject.prototype;
    },
  
    isString: function (p_oCheck) {
      return typeof (p_oCheck) === "string";
    },
    
    isFunction: function (p_oCheck) {
      return p_oCheck instanceof Function;
    },
    
    isUndefined: function (p_oCheck) {
      return typeof (p_oCheck) === "undefined";
    },
    
    isArray: function (p_oCheck) {
      return Object.prototype.toString.call(p_oCheck) === "[object Array]";
    }

  }

})