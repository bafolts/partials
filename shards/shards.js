/**
 * A module representing the main access point
 * for the shards library. Includes common helper functions for loading or creating
 * partials from within an HTML document.
 * @module shards
 * @version 0.1
 */
define("shards", function () {

  return {
  
    instances: [],

    /**
     * Returns the associated shard for the provided container, or null if not found.
     * @param elContainer {Element} The element to search for.
     * @return {module:shard} The associated shard for the provided container, or null if not found.
     * @static
     */
    getByContainer: function (elContainer) {
      for (var i = 0, length = this.instances.length; i < length; i++) {
        if (this.instances[i].getContainer() === elContainer) {
          return this.instances[i];
        }
      }
      return null;
    },

    /**
     * Returns the associated shard for the provided id, or null if not found.
     * @param sId {string} The id to search for.
     * @return {module:shard} The associated shard for the provided id, or null if not found.
     * @static
     */
    getById: function (sId) {
      for (var i = 0, length = this.instances.length; i < length; i++) {
        if (this.instances[i].getId() === sId) {
          return this.instances[i];
        }
      }
      return null;
    },

    /**
     * Loads a pre-rendered shard. This is a shard that already has the
     * HTML for the shard loaded on the DOM. This method then associates a
     * shard module with the provided container. It is a helper method
     * since a shard can always be created manually by calling load on the instance of a shard
     * module.
     * @param sType {String} The name of the shard module to load
     * @param oConfig {Object} The configuration object to use for the shard
     * @param elContainer {Element} The element which will be used for the container of the shard
     * @static
     */
    load : function (sType, oConfig, elContainer) {
      
      require([sType], function (shard) {
        new shard(oConfig).load(elContainer);
      })

    },
  
    /**
     * Creates a shard of a provided type. This method should be used for the dynamic creation of a shard. It is a helper method
     * since a shard can always be created manually by calling create on the instance of a shard module.
     * @param sType {String} the name of the shard module to load
     * @param oConfig {Object} The configuration object to use for the shard
     * @param fCallback {Function} The function to call when the shard has been fully created.
     * @static
     * This function will have a single parameter which is the new container for the shard, the scope of the function will be that of the shard module.
     */
    create : function (sType, oConfig, fCallback) {
      
      require([sType], function (shard) {
        new shard(oConfig).create(fCallback);
      })
      
    }
  }

})