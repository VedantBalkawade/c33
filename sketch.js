var backgroundImg;
var snow;snow2







function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
function preload(){
  backgroundImg=loadImage("snow3.jpg")
  snow=loadImage("snow4.webp")
  snow2=loadImage("snow5.webp")
  
}
function draw() {
  background(backgroundImg);  
  drawSprites();
}