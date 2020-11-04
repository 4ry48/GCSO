var car1,wall;
var speed1,  weight;





function preload() {
  
}

function setup() {
  createCanvas(1535, 750);
  
  speed = random(55, 90);
 
  weight = random(400, 1500);
  car = createSprite(140, 50, 200, 20);
 
  car.scale = 0.3;
  car.velocityX = speed;
  
  wall = createSprite(1500, -40, 60, 1000);
  
  wall.shapeColor = "brown";
  ;
}

function draw() {
  background(0);
  drawSprites();

if(wall.x - car.x < (car.width+wall.width)/2){
car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22509;
if(deformation > 180){
car.shapeColor=color(255,0,0);
}
if(deformation < 180 && deformation > 100){

car.shapeColor=color(230,230,0);

}
if(deformation < 100){
car.shapeColor=color(0,255,0);

}
}
 

}