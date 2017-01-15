


  function phubbs(c) {
    this.c = c;
    console.log("Clocks since startup: ");
  }

  function circleWindow(cc, XX, YY) {
    this.cc = cc;
    this.XX = XX;
    this.YY = YY
    cc.beginPath();
    cc.arc(XX,YY,7,0,2*Math.PI);
    cc.fillStyle = 'white';
    cc.fill();
    console.log("Create circle window");

    /*context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke(); */
  }

  function circleSquare(cc, XX, YY, radius, Height){
    this.cc = cc;
    this.XX = XX;
    this.YY = YY;
    this.radius = radius;
    this.Height = Height;
    cc.beginPath();
    cc.arc(XX,YY,radius,0,2*Math.PI);
    cc.fillStyle = 'white';
    cc.fill();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(XX - radius,YY,radius*2,Height);
    console.log("small square window");
  }

  function sSpire(cc, X, Y){
    this.cc = cc;
    this.X = X;
    this.Y = Y;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(X,Y,5,5);
    //draw triangle
    cc.beginPath();
    cc.moveTo(X+2.5, Y-8); //top spires
    cc.lineTo(X+1,Y);
    cc.lineTo(X+4,Y);
    this.cc.fillStyle = "black";
    cc.fill();
    cc.closePath();
    //circle
    cc.arc(X+2.5,Y-8,1,0,2*Math.PI);
    this.cc.fillStyle = "black";
    cc.fill();
  }

  function MSpire(cc, X, Y){
    this.cc = cc;
    this.X = X;
    this.Y = Y;

    //draw triangle
    cc.beginPath();
    cc.moveTo(X+11, Y-58); //top spires
    cc.lineTo(X,Y);
    cc.lineTo(X+22,Y);
    this.cc.fillStyle = "black";
    cc.fill();
    cc.closePath();

    //circle
    cc.arc(X+11,Y-57,3,0,2*Math.PI);
    cc.fill();
    //cross
  }

  function Parker(ctx) {
    this.ctx = ctx;
  }
  Parker.prototype = {
    //constructor Parker;
    draw: function(){
    //The canvas is  width='282' height='400'>
      var kk = 2;

/****************************************/
    //left-main column
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(20,160,50,240);//main body
      this.ctx.fillRect(25,140,40,40);
      this.ctx.fillRect(30,120,30,30);
      //WINDOWS
      circleSquare(ctx, 45, 215, 6, 18);
      circleSquare(ctx, 45, 250, 6, 18);
      circleSquare(ctx, 45, 285, 6, 18);
      circleSquare(ctx, 45, 325, 6, 18);
      circleSquare(ctx, 45, 360, 6, 22);
      //SPIRES
      sSpire(ctx, 19, 157.5); //-1 X,-1.5Y difference
      sSpire(ctx, 24, 137.5); //-1 X,-1.5Y difference
      sSpire(ctx, 29, 117.5); //-1 X,-1.5Y difference

      sSpire(ctx, 66, 157.5); //-4 X,-1.5Y difference
      sSpire(ctx, 61, 137.5); //
      sSpire(ctx, 56, 117.5); //

      MSpire(ctx, 34, 120); //
/********************@@@@@@@********************/
    //midleft
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(70,223,40,240);
      //WINDOWS
      circleWindow(ctx, 90, 257);
      circleWindow(ctx, 90, 328);
      circleSquare(ctx, 90, 285, 6, 18);
      circleSquare(ctx, 90, 360, 10, 22);
      //small lower-squares left (left to right)
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(78,217,6,9);
      this.ctx.fillRect(84,220,6,9);
      this.ctx.fillRect(90,213,6,12);
      this.ctx.fillRect(96,216,14,12); //larger

/****************************************/
    //Mid-Main column
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(110,160,62,240);

      circleSquare(ctx, 141, 197, 8, 34);
      circleSquare(ctx, 141, 255, 8, 48);
      circleSquare(ctx, 141, 328, 8, 54);

/****************************************/
    //midRight
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(172,223,40,240);
      //windows
      circleWindow(ctx, 192, 257);
      circleWindow(ctx, 192, 328);
      circleSquare(ctx, 192, 285, 6, 18);
      circleSquare(ctx, 192, 360, 10, 22);
      //small lower-squares right (left to right)
      //start at 172 X, 160 Y
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(198,217,6,9);
      this.ctx.fillRect(192,220,6,9);
      this.ctx.fillRect(186,213,6,12);
      this.ctx.fillRect(172,216,14,12); //larger

/****************************************/
    //right-main column
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(212,160,50,240);

      circleSquare(ctx, 237, 215, 6, 18);
      circleSquare(ctx, 237, 250, 6, 18);
      circleSquare(ctx, 237, 285, 6, 18);
      circleSquare(ctx, 237, 325, 6, 18);
      circleSquare(ctx, 237, 360, 6, 22);

//src='ParkerDrawing1.js'
      //this.ctx.helpMe(ctx);
      //ctx.helpMe(ctx);
      phubbs(ctx);
    }

  }
