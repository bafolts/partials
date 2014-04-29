
shards.define(function() {

  return {
    namespace: function (namespace, rootObject) {

      if(this.isUndefined(rootObject)) {
        rootObject = window;
      }

      var aNamespaces = namespace.split(".");
      
      for(var i = 0, len = aNamespaces.length; i<len; i++) {
        rootObject = rootObject[aNamespaces[i]] = rootObject[aNamespaces[i]] || {};
      
      }

      return rootObject;

    },
    
    extend: function (baseObject, inheritingObject) {
      var c = function(){};
      c.prototype = baseObject.prototype;
      inheritingObject.prototype = new c();
      inheritingObject.prototype.constructor = inheritingObject;
      inheritingObject.superclass = baseObject.prototype;
      return inheritingObject;
    },
  
    isString: function (check) {
      return typeof (check) === "string";
    },
    
    isFunction: function (check) {
      return check instanceof Function;
    },
    
    isUndefined: function (check) {
      return typeof (check) === "undefined";
    },
    
    isArray: function (check) {
      return Object.prototype.toString.call(check) === "[object Array]";
    }

  }

})