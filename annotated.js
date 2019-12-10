var W = 80 // width
  , M = Math // Math and friends.
  , s = M.sin
  , q = M.sqrt
  , e = M.pow
  , c = function(x, y) {
      var t = +new Date / W
        , d = function(a, b) {  // http://www.purplemath.com/modules/distform.htm
            return q(e(a - 99, 2) + e(b - 66, 2))
        }
        , v = s(d(x + t, y) / 7) + s(d(x, y) / 7) + s(d(x, t / 4) / 7) + s(d(x, y + t) / 7);
      return (0 | (7 + v)) * 23
  }
  , _ = document.title
  , B = function(b) { // crappy 'color' to char convertion.
      return b < 75 ? " " : b < 100 ? "." : b < 175 ? "o" : b < 200 ? "O" : "@"
  }
  , P = function() { // teh plasma
      p.innerHTML = ""; // canvas.clearRect from the past.
      // 20 lines
      for (y = 20; y--;) { // height
        // 80 cols
        for (q = 0, l = "", x = W; x--;) {
          // on each cycle, we'll reset q and l.
          // also, we'll ask which position we're in
          // so we can insert document.title into the plasma.
          // else put a char based on its 'color'.
          l += y == 10 && x > 31 && x < 50 ? _[q++] : B(c(y, x))
        }
        p.innerHTML += l + "<br>"
      }
  };
// when loaded, redraw every 24 fps
window.onload = Function("", "setInterval(P,42)")
