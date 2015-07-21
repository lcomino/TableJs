(function (obj) {
    var TableJs = function(opt){
      var options = {
          selector : '.table-hide-show',
          tableHeader : null
      };

      this.element = null;
      this.header = null;
      this.isShow = true;

      function init(opt){
        options = obj.extend({}, options, opt);
        this.element = document.querySelector(options.selector);
        getHeaders.call(this);
      }

      //@TODO: create events for hide and show columns

      function getHeaders(){
        //get headers from table
        //console.log();

        var header = options.tableHeader ? this.element.querySelector(options.tableHeader) : this.element.firstElementChild,
            tagName = header.tagName;
        console.log(tagName);
        if(tagName !== 'TBODY' && tagName !== "THEAD"){
          throw ('Invalid Tag for header');
        }

        var firstRow = header.rows[0],
            cells = firstRow.cells,
            values = getValuesFromHeader(cells);

        this.header = {
          cells : cells,
          values : values
        };

      }

      function getValuesFromHeader(cells){
          var c = [].slice.call(cells, 0);
          return c.map(function(el){ return el.innerText || el.innerHTML; });
      }

      init.call(this, opt);

    };

    TableJs.prototype.toggleHide = function () {
      if(this.isShow){
        this.element.classList.add('hide');
        this.isShow = false;
        return this;
      }

      this.element.classList.remove('hide');
      this.isShow = true;

    };

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') module.exports = TableJs;
    else window.TableJs = TableJs;

})(objectjs);
