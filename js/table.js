(function () {
  var tablejs = (function(){
    var tablejs = {};
    var options = {
        object : '.table-hide-show',
        tableHeader : 'thead'
    };

    tablejs.init = function(opt){
        options = objectjs.extend({}, options, opt);
        var table = document.querySelectorAll(options.object)[0];
    };

    return tablejs;
  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = tablejs;
  else window.tablejs = tablejs;
})();
