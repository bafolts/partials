shards.define(["shards/shard", "shards/util"], function (shard, util) {

  var textbox = util.extend(shard, function (config) {

    this.config = shards.merge(config, {
      value: null
    })
    
    textbox.superclass.constructor.call(this, this.config);
  });

  textbox.prototype.render = function () {
  
    var elInput = document.createElement("INPUT");
    
    if (this.config.value !== null) {
      elInput.value = this.config.value;
    }
  
    textbox.superclass.render.call(this, elInput);
 
  }

  return textbox;

})