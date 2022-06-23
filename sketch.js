var navio,navioImagen
var oceano,oceanoImagen



function preload(){
  navioImagen=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  oceanoImagen=loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  oceano=createSprite(200,200)
oceano.addImage(oceanoImagen)
oceano.velocityX=-5
navio=createSprite(200,350)
navio.addAnimation("navegando",navioImagen)
navio.scale=0.1

}

function draw() {
  background("blue");
    drawSprites();
if(oceano.x < 0){
oceano.x= oceano.width/2
}


 
}
