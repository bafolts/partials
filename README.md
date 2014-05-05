shards
========

Shards is a simple approach to giving context and meaning to elements contained within the DOM. Removes the need to utilize data attributes on elements to provide context.

This project servers as the base for the rest of the shards-ui project which provides common user interface components. The only outside dependency required to utilize
shards in the browser is an [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) loader such as [RequireJS](https://github.com/jrburke/requirejs).


Why does the world need another library like this?
----------------------------

UI frameworks exist written for a specific front-end library like jQuery or YUI, or tied directly to the server side language. The goal of this project is to create a library
of user interface components which can be utilized on as many platforms as possible. With newer code it is easy to pick the latest language and start running, for legacy
projects that are tied into utilizing jQuery or YUI for specific reasons this library will enable them to utilize the same user interface components that new systems can utilize.

One of the goals of the project is to enable other developers to contribute re-usable shards. This project will serve as the base project for all underlying shard projects. It will
house the code required for the general idea of a shard, which is giving context to the DOM.

```html
<input type="text" value="45" id="Age" />
<!-- Sample Usage -->
<script type="text/javascript">
require(["shards/ui/textbox"], function (textbox) {
  shards.load({
    sClassName: "configure-look-specifically"
  }, document.getElementById("Age"))
})
</script>
```


[Visit Shards on github](https://github.com/bafolts/shards/)

[Visit our documentation site](http://www.shardjs.com)
