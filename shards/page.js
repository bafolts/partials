/**
 * A module which represents a page. A page represents the main access point for all shards.
 * The container for this shard is automatically the BODY element of the document.
 * a context to an HTML Element.
 * @module page
 * @version 0.1
 */
define(["./shard", "./util"], function(shard, util) {

  /**
   * Creates a new page
   * @constructor
   * @augments module:shard
   * @alias module:page
   * @param config {Object} The configuration used to create this page
   */
  var page = function (oConfig) {
    page.superclass.constructor.call(this)
    
    // This needs to be done onDomReady
    this.setContainer(document.body)
  };
  util.extend(shard, page);
  
  
  
  return page;

})