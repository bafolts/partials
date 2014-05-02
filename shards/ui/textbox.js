define(["shards", "hb!./textbox.handlebars", "../shard", "../util"], function (shards, handlebarsTemplate, shard, util) {

  var textbox = util.extend(shard, function (config) {

    this.config = util.merge(config, {
      sValue: null
    })
    
    textbox.superclass.constructor.call(this, this.config);
  });

  textbox.prototype.create = function (callback) {
    var elDiv = document.createElement("div");
    elDiv.innerHTML = handlebarsTemplate(this.config);
    this.setContainer(elDiv.firstChild);
    callback.call(this, this.getContainer());
  }
  
  textbox.prototype.load = function (container) {
    textbox.superclass.load.call(this, container);

    this.getContainer().setAttribute("type", "text");

    if (this.config.sValue !== null) {
      this.getContainer().setAttribute("value", this.config.sValue);
    } else {
      this.getContainer().removeAttribute("value")
    }
    
    if (this.config.sClassName !== null) {
      this.getContainer().setAttribute("class", this.config.sClassName);
    } else {
      this.getContainer().removeAttribute("class");
    }
  
  }

  return textbox;

})