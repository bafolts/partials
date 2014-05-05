/**
 * A module which represents the utility methods which the shards library needs
 * a context to an HTML Element.
 * @module util
 * @version 0.1
 */
define(function() {

  return {

    /**
     * Extends a shard utilizing the prototype inheritance model commonly
     * used to mimic object oriented extension in javascript.
     * @param shBase {Object.<module:shard>} The base shard which will be extended.
     * @param shNew {Object.<module:shard>} The inheriting shard which will inherit base prototype members.
     * @return {Object.<module:shard>} The resulting shard
     * @static
     */
    extend: function (shBase, shNew) {
      var c = function(){};
      c.prototype = shBase.prototype;
      shNew.prototype = new c();
      shNew.prototype.constructor = shNew;
      shNew.superclass = shBase.prototype;
      return shNew;
    },

    /**
     * Merges two configuration objects to be used in shard constructors
     * @param oBase {Object} The base configuration object
     * @param oNew {Object} The new configuration object
     * @return {Object} The merged configuration object
     * @static
     */
    merge: function(oBase, oNew) {
      var result = {};
      for (var key in oBase) {
        result[key] = oBase[key];
      }
      for (var key in oNew) {
        if (!(key in result)) {
          result[key] = oNew[key];
        }
      }
      return result;

    }

  }

})