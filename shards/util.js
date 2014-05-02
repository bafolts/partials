/**
 * A module which represents the utility methods which the shards library needs
 * a context to an HTML Element.
 * @module util
 * @version 0.1
 */
define(function() {

  return {

    /**
     * Extends a class utilizing the prototype inheritance model commonly
     * used to mimic object oriented extension.
     * @param baseObject {Class} The base class which will be extended.
     * @param inheritingObject {Class} The inheriting class which will inherit base prototype members
     * @return {Class} The resulting class
     * @static
     */
    extend: function (baseObject, inheritingObject) {
      var c = function(){};
      c.prototype = baseObject.prototype;
      inheritingObject.prototype = new c();
      inheritingObject.prototype.constructor = inheritingObject;
      inheritingObject.superclass = baseObject.prototype;
      return inheritingObject;
    },

    /**
     * Merges two configuration objects to be used in shard constructors
     * @param mBase {Object} The base configuration object
     * @param mNew {Object} The new configuration object
     * @return {Object} The merged configuration object
     * @static
     */
    merge: function(mBase, mNew) {
      var result = {};
      for (var key in mBase) {
        result[key] = mBase[key];
      }
      for (var key in mNew) {
        if (!(key in result)) {
          result[key] = mNew[key];
        }
      }
      return result;

    }

  }

})