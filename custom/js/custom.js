$(document).ready(function() {
  function init () {
    var href, $lastLink;

    $("a.toggle-search").remove();
    $lastLink = $(".custom-link:last");
    $lastLink.remove();
  }
  init();
  require(["gitbook"], function (gitbook) {
    gitbook.events.bind("page.change", init);
  });
});