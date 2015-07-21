(function () {
  var objectjs = (function(){
    var objectjs = {};
    var options = {
        className : 'table-show-hide',
        tableHeader : 'thead'
    };

    objectjs.extend = function(out){
      out = out || {};

      for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i])
          continue;

        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key))
            out[key] = arguments[i][key];
        }
      }

      return out;
    };

      objectjs.bind = function(out, data){
        out = out || {};

      	for (var key in data) {
      	  if (out.hasOwnProperty(key))
      			out[key] = data[key];
      	}

        	return out;
    };

    return objectjs;
  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = objectjs;
  else window.objectjs = objectjs;
})();


/*Object.extend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    if (!arguments[i])
      continue;

    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key))
        out[key] = arguments[i][key];
    }
  }

  return out;
};

Object.bind = function(out, data) {
  	out = out || {};

	for (var key in data) {
	  if (out.hasOwnProperty(key))
			out[key] = data[key];
	}

  	return out;
};
*/
