/********************
*
**********************/

Function Point(x, y) {
   this.x = x;
   this.y = y;
  
}

Point.prototype = {
  constructor: Point,
'hi';
  getX: function() {
    return this.x;
  },
  getY: function() {
    return this.y;
  },
  setX: function(x) {
    this.x = x;
  }
};
