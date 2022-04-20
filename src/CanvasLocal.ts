export class CanvasLocal{
	protected graphics: CanvasRenderingContext2D;
	protected rWidth:number;
	protected rHeight:number;
	protected maxX:number;
	protected maxY:number;
	protected pixelSize:number;
	protected centerX:number;
	protected centerY:number;

	public constructor(g: CanvasRenderingContext2D, canvas: HTMLCanvasElement, an:number, lar:number){

	this.graphics=g;
	this.rWidth=an;
	this.rHeight=lar;
	this.maxX = canvas.width - 1
    this.maxY = canvas.height - 1;
    this.pixelSize = Math.max(this.rWidth / this.maxX, this.rHeight / this.maxY);
    this.centerX = this.maxX/2;
    this.centerY = this.maxY/2;

	}
	 iX(x: number):number{return Math.round(this.centerX + x/this.pixelSize);}
  iY(y: number): number{ return Math.round(this.centerY - y / this.pixelSize); }
 

	drawLine(x1: number, y1: number, x2: number, y2:number) {
    this.graphics.beginPath();
    this.graphics.moveTo(x1, y1);
    this.graphics.lineTo(x2, y2);
    this.graphics.closePath();
    this.graphics.stroke();
  }
  
  fx(x:number):number {
    return Math.cos(x*20.1);
   }

	paint(){
		/*
		this.drawLine(100.5,100, 500,100.5);
   		this.drawLine(500, 100, 300, 400);
    	this.drawLine(300, 400, 100,100);
		*/

//recta x, y

    
    let rx=this.drawLine(this.iX(-3), this.iY(0), this.iX(3), this.iY(0));
    let ry=this.drawLine(this.iX(0), this.iY(2), this.iX(0), this.iY(-2));
   
    let px= this.rWidth/2;
    let py = this.rHeight/2;

//cuadricula
    this.graphics.strokeStyle = 'lightgray';
    for (let x = -px; x <= px; x+=0.10){
      this.drawLine(this.iX(x), this.iY(-py), this.iX(x), this.iY(py));
    }
    for (let y = -py; y <= py; y+=0.10){
      this.drawLine(this.iX(-px), this.iY(y), this.iX(px), this.iY(y));
    }
    
 //dibuja las divisiones

    this.graphics.strokeStyle = 'black';
    for (let x = -px; x <= px; x++){
      this.drawLine(this.iX(x), this.iY(-py), this.iX(x), this.iY(py));
      this.graphics.strokeText(""+x, this.iX(x-0.3), this.iY(-0.3));

    
    }
    for (let y = -py; y <= py; y++){
      this.drawLine(this.iX(-px), this.iY(y), this.iX(px), this.iY(y));
       this.graphics.strokeText(""+y, this.iX(-0.3), this.iY(y-0.3));

    }
    //this.graphics.strokeText("X", this.iX(2.9), this.iY(0.2));
    //this.graphics.strokeText("Y", this.iX(-0.2), this.iY(1.8));

    //dibujar la funcion
    this.graphics.strokeStyle = 'blue';
    let paso: number = 0.1;
    for (let x = -px; x <= px; x+=paso){
       let x2 = Number(x.toFixed(1));
      this.drawLine(this.iX(x2), this.iY(this.fx(x2)), this.iX(x2+paso), this.iY(this.fx(x2+paso)));
    }


	}

}