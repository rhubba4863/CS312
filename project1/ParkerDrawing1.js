


  function phubbs(c) {
    this.c = c;
  }

  function Parker(ctx) {
    this.ctx = ctx;
  }
  Parker.prototype = {
    //constructor Parker;
    helpMe: function(c) {
      this.c = c;

      this.ctx.fillRect(0,0,40,40)
      console.log("Clocks since startup: ");
    },

    draw: function(){
    //The canvas is  width='282' height='400'>
      var kk = 2;
      //left-main column
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(20,160,50,240);

      //midleft
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(70,223,40,240);

      this.ctx.fillStyle = "blue";
      this.ctx.fillRect(78,217,6,7);
      this.ctx.fillStyle = "blue";
      this.ctx.fillRect(84,213,6,7);

      //Mid-Main column
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(110,160,62,240);

      //midRight
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(172,223,40,240);

      //right-main column
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(212,160,50,240);

      this.ctx.helpMe(ctx);
      ctx.helpMe(ctx);
      helpMe(ctx);
    }

  }
