define("examplePage", ["shards/page", "shards/util"], function (page, util) {

  var examplePage = util.extend(page, function (config) {
    examplePage.superclass.constructor.call(this, config);
  });

  return examplePage

})