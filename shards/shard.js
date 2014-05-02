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
      sId: null,
      sClassName: null
    });
    
    this.elContainer = null;

    shards.instances.push(this);
  }

  /**
   * Returns the current id of the shard
   * @returns {string} The current id of the shard, null if none is set.
   */
  shard.prototype.getId = function () {
    return this.config.sId;
  }
  

  /**
   * Returns the parent shard for this shard
   * @returns {shard} The parent shard for this shard, null if there is no parent.
   */
  shard.prototype.getParent = function () {
    var elStart = this.getContainer();
    while ((elStart = elStart.parentElement) !== null) {
      // If it is an element node
      if (elStart.nodeType === 1) {
        for (var i = 0, length = shards.instances.length; i < length; i++) {
          if (shards.instances[i].getContainer() === elStart) {
            return shards.instances[i];
          }
        }
      }
    }
    return null;
  }
  
  shard.prototype.getElementById = function () {
    // TODO
  }
  
  shard.prototype.getChildren = function () {
    var aChildren = this.getContainer().childNodes;
    var aResult = [];
    for (var i = 0, length = aChildren.length; i < length; i++) {
      if (aChildren[i].nodeType === 1) {
        for (var j = 0, lengthJ = shards.instances.length; j < lengthJ; j++) {
          if (aChildren[i] === shards.instances[j].getContainer()) {
            aResult.push(shards.instances[j])
          }
        }
      }
    }
    return aResult;
  }
  
  shard.prototype.getDescendants = function () {
    var aDescendants = this.getContainer().getElementsByTagName("*");
    var aResult = [];
    for (var i = 0, length = aDescendants.length; i < length; i++) {
      if (aDescendants[i].nodeType === 1) {
        for (var j = 0, lengthJ = shards.instances.length; j < lengthJ; j++) {
          if (aDescendants[i] === shards.instances[j].getContainer()) {
            aResult.push(shards.instances[j])
          }
        }
      }
    }
    return aResult
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