var fixedRect
var movingRect

var gameObject1
var gameObject2
var gameObject3
var gameObj4

function setup() {


  createCanvas(1200,800);

  fixedRect=createSprite(600,400,50,80)
  movingRect=createSprite(400,200,80,30)

  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";

  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green";

  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="green";
  
  



  
}

function draw() {
  background(0,0,0);  
 
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

  if(isTouching(movingRect,fixedRect))
  {
    movingRect.shapeColor="red"
    fixedRect.shapeColor="red"
  }
  else{
    movingRect.shapeColor="blue"
    fixedRect.shapeColor="blue"
  }
 

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor="white";
    gameObject1.shapeColor="white";
  }
  else{
    movingRect.shapeColor="orange";
    gameObject1.shapeColor="orange";
  }
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="white";
    gameObject2.shapeColor="white";
  }
  else{
    movingRect.shapeColor="orange";
    gameObject2.shapeColor="orange";
  }
  drawSprites();
  
}




function isTouching(object1,object2){

  if(object1.x-object2.x<object2.width/2+object1.width/2 
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object2.y-object1.y<object2.height/2+object1.height/2
    && object1.y-object2.y<object2.height/2+object1.height/2)
  {
    return true;
  
  }
   
  else{
   return false
  }
}

