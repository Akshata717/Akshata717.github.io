var a =250
var b =250
let x
let x1
let x2
let x3
let x4

let y
let y1
let y2
let y3
let y4
let i = 0;
let angle

function setup () {
  createCanvas(500, 500);
  background('black');
  
}//setup
function draw() {
  for( i = 0;i<100;i++){
    
    //noFill();
    //circle(250,250,500)
    
   stroke('rgb(255,105,131)')
  strokeWeight(1)
  var corner=random (1, 6);
  corner=round(corner);
    
  

 if (corner==1){
   
   x = 250*cos(3*PI/2)+250
   y= 250*sin(3*PI/2)+250
   
   point(x,y)
   
   a = (x +a)/2
   b= (y+b)/2
// point(a,b);
 }//end if
  
   
 if (corner==2){
   let angle=2*PI/5
   x1 =250*cos(3*PI/2+angle)+250
   y1= 250*sin (3*PI/2+angle) +250
   point(x1,y1)
   
  a = (x1 + a)/2
  b= (y1+b)/2
   
 //point(a,b);
}//end if
  
 if (corner==3){
 let angle=2*PI/5
   x2 =250*cos(3*PI/2+2*angle)+250
   y2= 250*sin (3*PI/2+2*angle) +250
 point(x2,y2);
   
  a = (x2 + a)/2
  b= (y2+ b)/2
 }//end if
    
 if (corner==4){
let angle=2*PI/5
   x3 =250*cos(3*PI/2+3*angle)+250
   y3= 250*sin (3*PI/2+3*angle) +250
 point(x3,y3);
   
  a=(x3 + a)/2
  b= (y3+ b)/2
 }//end if
    
 if (corner==5){
let angle=2*PI/5
   x4 =250*cos(3*PI/2+4*angle)+250
   y4 = 250*sin (3*PI/2+4*angle) +250
   point(x4,y4);
   
  a = (a +x4)/2
  b = (b +y4)/2
   
 }//end if    
   point(a,b)    
  }//end for
}//draw 
  
 