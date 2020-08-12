(function() {
    var checkEr, checkVictory, eventClick, makeVictory, noEnd, noStart, rebuild, size, _i, _ref, _results,
      __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
  
    size = 5;
  
    window.state = (function() {
      _results = [];
      for (var _i = 1, _ref = Math.pow(size, 2); 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this);
  
    makeVictory = function() {
      var j;
      document.getElementsByTagName("h1")[0].innerHTML = '';
      document.getElementsByTagName("h3")[0].innerHTML = "<p>Victory</p>";
      document.getElementById('grid').innerHTML = '';
      j = 0;
      state.forEach(function(item, i, ar) {
        var hr, span;
        span = document.createElement('span');
        span.setAttribute('value', item);
        span.setAttribute('id', i);
        document.getElementById('grid').appendChild(span);
        j++;
        if (j === size) {
          j = 0;
          hr = document.createElement('hr');
          return document.getElementById('grid').appendChild(hr);
        }
      });
      document.getElementById("count").innerHTML = '';
      return console.log("Victory");
    };
  
    checkVictory = function() {
      var a, b, c, ers, n, v;
      ers = document.querySelectorAll("div#grid span.er");
      a = document.querySelectorAll("div#grid span[value=A]");
      b = document.querySelectorAll("div#grid span[value=B]");
      c = parseInt(a.length) + parseInt(b.length);
      n = parseInt(c - ers.length);
      document.getElementById("count").innerHTML = "Number of sticks: " + n;
      if (n === 16) {
        v = true;
      }
      if (v === true) {
        makeVictory();
      }
      return v;
    };
  
    eventClick = function(id) {
      switch (state[id]) {
        case "A":
          return state[id] = "B";
        case "B":
          return state[id] = "C";
        default:
          return state[id] = "A";
      }
    };
  
    noEnd = function(id) {
      var arr, i, r, _j;
      arr = [];
      r = size;
      for (i = _j = 0; 0 <= size ? _j <= size : _j >= size; i = 0 <= size ? ++_j : --_j) {
        arr.push(r - 1);
        r = r + size;
      }
      return !(__indexOf.call(arr, id) >= 0);
    };
  
    noStart = function(id) {
      var arr, i, r, _j;
      arr = [];
      r = 0;
      for (i = _j = 0; 0 <= size ? _j <= size : _j >= size; i = 0 <= size ? ++_j : --_j) {
        arr.push(r);
        r = r + size;
      }
      return !(__indexOf.call(arr, id) >= 0);
    };
  
    checkEr = function(id) {
      switch (state[id]) {
        case "A":
          if ((state[id + (size - 1)] === "A" && noStart(id)) || (state[id - (size - 1)] === "A" && noEnd(id)) || (state[id + 1] === "B" && noEnd(id)) || (state[id - 1] === "B" && noStart(id)) || state[id - size] === "B" || state[id + size] === "B") {
            return true;
          }
          break;
        case "B":
          if ((state[id + (size + 1)] === "B" && noEnd(id)) || (state[id - (size + 1)] === "B" && noStart(id)) || (state[id + 1] === "A" && noEnd(id)) || (state[id - 1] === "A" && noStart(id)) || state[id - size] === "A" || state[id + size] === "A") {
            return true;
          }
      }
    };
  
    rebuild = function() {
      var j;
      document.getElementById("grid").innerHTML = '';
      j = 0;
      return state.forEach(function(item, i, ar) {
        var hr, span;
        span = document.createElement('span');
        span.setAttribute('value', item);
        span.setAttribute('id', i);
        if (checkEr(i)) {
          span.className = 'er';
        }
        span.onclick = function() {
          eventClick(i);
          rebuild();
          if (checkVictory()) {
            return false;
          }
        };
        document.getElementById('grid').appendChild(span);
        j++;
        if (j === size) {
          j = 0;
          hr = document.createElement('hr');
          return document.getElementById('grid').appendChild(hr);
        }
      });
    };
  
    rebuild();
  
  }).call(this);