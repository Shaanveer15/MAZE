var w1,w2,w3,w4,wc,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21;
var bob;
var bg,ship,dmd;
function preload(){
 bg=loadImage('bg.png')
dmd=loadImage('diamond.png')
 ship=loadImage('ship.png')
}
function setup() {
  createCanvas(400,400);
  w1=createSprite(200,10,390,10);
  w1.shapeColor=("white");
  w2=createSprite(10,200,10,320);
  w2.shapeColor=("white");
  w3=createSprite(200,390,390,10);
  w3.shapeColor=("white");
  w4=createSprite(390,200,10,320);
  w4.shapeColor=("white");
  wc=createSprite(200,200,40,40);
  wc.addImage(dmd);
  wc.scale=0.11;
  w5=createSprite(60,45,20,65);
  w5.shapeColor=("white");
  w6=createSprite(200,75,300,20);
  w6.shapeColor=("white");
  w7=createSprite(60,45,20,65);
  w7.shapeColor=("white");
  w8=createSprite(340,150,20,135);
  w8.shapeColor=("white");
  w9=createSprite(300,225,100,20);
  w9.shapeColor=("white");
  w10=createSprite(155,125,290,20);
  w10.shapeColor=("white");
  w11=createSprite(185,165,290,20);
  w11.shapeColor=("white");
  w12=createSprite(45,250,20,190);
  w12.shapeColor=("white");
  w13=createSprite(100,335,90,20);
  w13.shapeColor=("white");
  w14=createSprite(185,300,20,90);
  w14.shapeColor=("white");
  w15=createSprite(150,245,90,20);
  w15.shapeColor=("white");
  w16=createSprite(100,210,20,90);
  w16.shapeColor=("white");
  w17=createSprite(115,290,70,20);
  w17.shapeColor=("white");
  w18=createSprite(290,335,90,20);
  w18.shapeColor=("white");
  w19=createSprite(255,275,20,120);
  w19.shapeColor=("white");
  w20=createSprite(345,305,20,80);
  w20.shapeColor=("white");
  w21=createSprite(300,280,30,20);
  w21.shapeColor=("white");
  Bob=createSprite(20,30,15,15);
  Bob.shapeColor="red";
  Bob.addImage(ship);
  Bob.scale=0.05;
  edges=createEdgeSprites();
}

function draw() {
  background(bg);  
  drawSprites();
Bob.bounceOff(edges);
  if(keyDown(UP_ARROW)) {   
Bob.x +=0;
Bob.y +=-2;
  }
if (keyDown(DOWN_ARROW)) {
  Bob.y +=2;
  Bob.x +=0;
 }
   if (keyDown(LEFT_ARROW)) {
  Bob.y +=0;
  Bob.x +=-2;
  }  
  if (keyDown(RIGHT_ARROW)){
Bob.y +=0;
 Bob.x +=2;
  }
if(Bob.isTouching(w1)||Bob.isTouching(w2)||Bob.isTouching(w3)||Bob.isTouching(w4)||Bob.isTouching(w5)
||Bob.isTouching(w6)||Bob.isTouching(w7)||Bob.isTouching(w8)||Bob.isTouching(w9)||Bob.isTouching(w10)
||Bob.isTouching(w11)||Bob.isTouching(w12)||Bob.isTouching(w13)||Bob.isTouching(w14)||Bob.isTouching(w15)
||Bob.isTouching(w16)||Bob.isTouching(w17)||Bob.isTouching(w18)||Bob.isTouching(w19)||Bob.isTouching(w20)||
Bob.isTouching(w21)){
  Bob.x=20;
  Bob.y=30;
  Bob.velocityX=0;
  Bob.velocityY=0;
  fill ("black");
  text("GAME OVER",160,200);
}

 if(Bob.isTouching(wc)){
 textSize(50);
 fill("black");
 text("You Win",120,200)
}
}