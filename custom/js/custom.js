$(document).ready(function() {
  function init () {
    var href, $lastLink;

    $("a.toggle-search").remove();
    $lastLink = $(".custom-link:last");
    $lastLink.remove();
  }
  
  init();
  require(["gitbook"], function (gitbook) {
    function startMathJax() {
      MathJax.Hub.Config({
        tex2jax: {}
      });

      gitbook.events.bind("page.change", function () {
        MathJax.Hub.Typeset();
      });
    }
    gitbook.events.bind("page.change", init);
    var interval = null
    interval = setInterval(function () {
      if (typeof MathJax === "object") {
        startMathJax()
        clearInterval(interval);
      }
    }, 1000);
  });
});
