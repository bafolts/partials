/**
 * A module which represents a shard. A shard is a module which gives meaning
 * a context to an HTML Element.
 * @module shard
 * @version 0.1
 */
define(["shards", "./util"], function(shards, util) {

  /**
   * Creates a new shard
   * @constructor
   * @alias module:shard
   * @param config {Object} The configuration used to create this shard
   */
  var shard = function (config) {

    this.config = util.merge(config, {
      sGuid: null,
      sClassName: null
    });
    
    this.elContainer = null;
    
  }
  
  /**
   * Loads a chard to the a container
   * @param container {Element} The element of the shard to load
   */
  shard.prototype.load = function (container) {
    this.elContainer = container;
  }

  /**
   * Returns the current container that this shard represents
   * @returns {Object} The container for the shard
   */
  shard.prototype.getContainer = function () {
    return this.elContainer;
  }
  
  /**
   * Sets the current container that this shard represents
   * @param container {Object} The new container that this shard will represent
   */
  shard.prototype.setContainer = function (container) {
    this.elContainer = container;
  }

  return shard;

})