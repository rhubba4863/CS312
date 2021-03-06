


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

  function MedSpire(cc, X, Y){
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
    cc.arc(X+11,Y-55,3,0,2*Math.PI);
    cc.fill();
    cc.closePath();
    cc.arc(X+11,Y-63,2,0,2*Math.PI);
    cc.fill();
    //cross
    this.ctx.fillRect(X+10.5,Y-57,1,-10);
  }

  function LargeSpire(cc, X, Y){
    this.cc = cc;
    this.X = X;
    this.Y = Y;

    //draw triangle
    cc.beginPath();
    cc.moveTo(X+16, Y-84); //top spires
    cc.lineTo(X,Y);
    cc.lineTo(X+32,Y);
    this.cc.fillStyle = "black";
    cc.fill();
    cc.closePath();
    //circle
    cc.beginPath();
    cc.fillStyle = "gold";
    cc.arc(X+16,Y-79,4,0,2*Math.PI);
    cc.fill();
    cc.closePath();
  }

  function smmSpire(cc, X, Y){
    this.cc = cc;
    this.X = X;
    this.Y = Y;
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(X,Y,7,7);
    //draw triangle
    cc.beginPath();
    cc.moveTo(X+3.5, Y-12); //top spires
    cc.lineTo(X+1.5,Y);
    cc.lineTo(X+5.5,Y);
    this.cc.fillStyle = "black";
    cc.fill();
    cc.closePath();
    //circle
    cc.arc(X+3.5,Y-12,1,0,2*Math.PI);
    this.cc.fillStyle = "black";
    cc.fill();
  }
  function AngelTrumpet(cc, X, Y){
    this.cc = cc;
    this.X = X;
    this.Y = Y;
    this.ctx.fillStyle = "gold";
    this.ctx.fillRect(X,Y,2,7); //legs
    //draw bottom robe
    cc.beginPath();
    cc.moveTo(X-2, Y+0.5); //start left
    cc.lineTo(X-2.25,Y-7);
    cc.lineTo(X+3,Y-7);
    cc.lineTo(X+3,Y-0.5);
    cc.lineTo(X,Y);
    this.cc.fillStyle = "gold";
    cc.fill();
    cc.closePath();
    //draw mid robe
    cc.beginPath();
    cc.moveTo(X-2.25,Y-7); //start left
    cc.lineTo(X-2.75,Y-7);
    cc.lineTo(X-2.2,Y-17);
    cc.lineTo(X+4,Y-19);     //right shoulder
    cc.lineTo(X+8,Y-8);
    cc.lineTo(X+3,Y-16);
    cc.lineTo(X+4,Y-7);     //bottom right of mid robe
    this.cc.fillStyle = "gold";
    cc.fill();
    cc.closePath();
    //draw left arm and head
    cc.beginPath();
    cc.moveTo(X-2.2,Y-17); //start left armpit
    cc.lineTo(X-5,Y-20);
    cc.lineTo(X-4,Y-35);//made left hand
    this.cc.fillStyle = "gold";
    cc.fill();
    cc.closePath();
    //circle/head
    cc.beginPath();
    cc.fillStyle = "gold";
    cc.arc(X,Y-20,2,0,2*Math.PI);
    cc.fill();
    cc.closePath();
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

      MedSpire(ctx, 34, 120); //
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
      this.ctx.fillRect(110,155,62,250);
      this.ctx.fillRect(115,135,52,52);
      this.ctx.fillRect(120,110,42,42);

      circleSquare(ctx, 141, 197, 8, 34);
      circleSquare(ctx, 141, 255, 8, 48);
      circleSquare(ctx, 141, 328, 8, 54);

      smmSpire(ctx, 108, 152.5);
      smmSpire(ctx, 113.5,132.5);
      smmSpire(ctx, 118,107.5);

      smmSpire(ctx, 167, 152.5);
      smmSpire(ctx, 161.5,132.5);
      smmSpire(ctx, 157,107.5);

      LargeSpire(ctx, 125, 110)
      AngelTrumpet(ctx, 140, 24)

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
      this.ctx.fillRect(212,160,50,240);//main body
      this.ctx.fillRect(217,140,40,40);
      this.ctx.fillRect(222,120,30,30);

      circleSquare(ctx, 237, 215, 6, 18);
      circleSquare(ctx, 237, 250, 6, 18);
      circleSquare(ctx, 237, 285, 6, 18);
      circleSquare(ctx, 237, 325, 6, 18);
      circleSquare(ctx, 237, 360, 6, 22);

    //SPIRES
      sSpire(ctx, 211, 157.5); //-1 X,-1.5Y difference
      sSpire(ctx, 216, 137.5); //-1 X,-1.5Y difference
      sSpire(ctx, 221, 117.5); //-1 X,-1.5Y difference

      sSpire(ctx, 258, 157.5);
      sSpire(ctx, 253, 137.5);
      sSpire(ctx, 248, 117.5);

      MedSpire(ctx, 226, 120);





//src='ParkerDrawing1.js'
      //this.ctx.helpMe(ctx);
      //ctx.helpMe(ctx);
      phubbs(ctx);
    }

  }
