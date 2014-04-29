shards.define(function() {

  var shard = function (config) {
    this.config = shards.merge(config, {
      guid: null,
      className: null
    });
  }

  shard.prototype.init = function () {

  }
  
  shard.prototype.render = function (container) {
    document.getElementById(this.config.guid).parentNode.removeChild(document.getElementById(this.config.guid).previousSibling)
    document.getElementById(this.config.guid).parentNode.replaceChild(container, document.getElementById(this.config.guid));
    if (this.config.guid.substring(0, 2)!=="ph") {
      container.setAttribute("id", this.config.guid);
    }
    if (this.config.className !== null) {
      container.className = this.config.className;
    }
  }

  return shard;

})