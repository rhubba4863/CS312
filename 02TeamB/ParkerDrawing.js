  function Parker(ctx) {
    this.ctx = ctx;
  }
  Parker.prototype = {
    //constructor Parker;
    draw: function(){
      //this.ctx;


      //var can2 = document.getElementById("canvas2");
      //var ctx2 = can2.getContext("2d");
      console.log('sfihisodfjosdijf');
      //background white
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(0,0,225,150);

      //this.ctx.strokeRect(50,50,50,50);
                           //x  y lengths
      //topleft red
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(15,5,45,50);
      this.ctx.fillStyle = "blue";
      this.ctx.fillRect(70,5,16,140);

      this.ctx.fillStyle = "blue";
      this.ctx.fillRect(15,62,195,16);

      this.ctx.fillStyle = "red";
      this.ctx.fillRect(95,5,115,50);

      this.ctx.fillStyle = "red";
      this.ctx.fillRect(15,88,45,56);
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(95,88,115,56);

      //grey border
      this.ctx.strokeRect(15,5,195,140);
    }
  }
