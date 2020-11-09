var bullet,wall;
var speed ,weight;
var damage,thickness;

function prelod(){
  //carImage=loadImage("sport-car-silhouette-25");
}

function setup() {
  createCanvas(800,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(20,50);


  bullet =createSprite(50,200,30,10);
  //car.addImage(carImage);
  wall =createSprite(600,200,thickness,height/2);
  wall.shapeColor=80,80,80;
  
}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX=0;

  hasCollided();

}
  drawSprites();
  }


function hasCollided(){
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage<10){
    wall.shapeColor=("red");
  }
  if(damage>10){
    wall.shapeColor=("green");
  }

  }

