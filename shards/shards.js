/**
 * A module representing the main access point
 * for the shards library. Includes common helper functions for loading or creating
 * partials from within an HTML document.
 * @module shards
 * @version 0.1
 */
define("shards", function () {

  require.config({
    paths: {
      text: './shards/lib/requirejs/text',
      hb: './shards/lib/requirejs-hb/hb',
      handlebars: './shards/lib/handlebars/handlebars-v1.3.0'
    }
  })

  return {
  
    instances: [],

    getByContainer: function (container) {
      for (var i = 0, length = this.instances.length; i < length; i++) {
        if (this.instances[i].getContainer() === container) {
          return this.instances[i];
        }
      }
      return null;
    },

    getById: function (id) {
      for (var i = 0, length = this.instances.length; i < length; i++) {
        if (this.instances[i].getId() === id) {
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
     * @param type {String} The name of the shard module to load
     * @param config {Object} The configuration object to use for the shard
     * @param container {Element} The element which will be used for the container of the shard
     * @static
     */
    load : function (type, config, container) {
      
      require([type], function (shard) {
        new shard(config).load(container);
      })

    },
  
    /**
     * Creates a shard of a provided type. This method should be used for the dynamic creation of a shard. It is a helper method
     * since a shard can always be created manually by calling create on the instance of a shard module.
     * @param type {String} the name of the shard module to load
     * @param config {Object} The configuration object to use for the shard
     * @param callback {Function} The function to call when the shard has been fully created.
     * @static
     * This function will have a single parameter which is the new container for the shard, the scope of the function will be that of the shard module.
     */
    create : function (type, config, callback) {
      
      require([type], function (shard) {
        new shard(config).create(callback);
      })
      
    }
  }

})