/*************************
* Point class
*************************/
function Point(x, y) {
   this.x = x;
   this.y = y;
}
/*************************
* Point class enumerated
*************************/
Point.prototype = {
  constructor: Point,
  getX: function() {
    return this.x;
  },
  getY: function() {
    return this.y;
  },
  setX: function(x) {
    this.x = x;
  },
  setY: function(y) {
    this.y = y;
  },
  addX: function(x) {
    this.x += x;
  },
  addY: function(y) {
    this.y += y;
  },
  distance: function (pt) {
    return Math.sqrt(Math.pow(pt.x - this.x,2) +
                     Math.pow(pt.y - this.y,2));
  },
  addPoint: function(pt) {
    this.x += pt.getX();
    this.y += pt.getY();
  }
};
