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
   * @param oConfig {Object} The configuration used to create this shard
   */
  var shard = function (oConfig) {

    this.config = util.merge(oConfig, {
      sId: null,
      oElementMap: null,
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
   * @returns {module:shard} The parent shard for this shard, null if there is no parent.
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
  
  /**
   * Returns an element by it's ID, the ID of the element is provided by
   * a map to the config property, namely the oElementMap property.
   * @param sId {string} The string of the element to return.
   * @return {Element} The associated dom element registered with the shard
   * with the provided ID, or null if not found, or if the map is not defined.
   */
  shard.prototype.getElementById = function (sId) {
    if (this.config.oElementMap !== null) {
      if (sId in this.config.oElementMap) {
        return this.config.oElementMap[sId];
      }
    }
    return null;
  }
  
  /**
   * Returns an array of all child shards. These are all DOM elements who are a direct child node
   * of this shard's container that have an associated shard registered.
   * @return {Array.<module:shard>} Array of any found child shards, an empty array will 
   * be returned if no items are found. The result of this method is a subset
   * of getDescendants.
   * @see {@link module:shard#getDescendants} May be subset of getDescendants.
   */
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

  /**
   * Returns an array of all descendant shards. These are all DOM elements who have this shard's
   * container as an ancestor that have an associated shard registered.
   * @return {Array.<module:shard>} Array of any found descendant shards, an empty array will 
   * be returned if no items are found.
   */
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
   * @param elContainer {Element} The element of the shard to load
   */
  shard.prototype.load = function (elContainer) {
    this.elContainer = elContainer;
  }

  /**
   * Returns the current container that this shard represents
   * @returns {Element} The container for the shard
   */
  shard.prototype.getContainer = function () {
    return this.elContainer;
  }
  
  /**
   * Sets the current container that this shard represents
   * @param elContainer {Element} The new container that this shard will represent
   */
  shard.prototype.setContainer = function (elContainer) {
    this.elContainer = elContainer;
  }

  return shard;

})