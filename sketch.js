
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var destiny
var wizard1,wizard2
var fire
var thunder

function preload(){
 destinyImage=loadImage("shadow fighter.jpg")
backgroundImage=loadImage("background1.jpg")
wizard1Image=loadImage("fire wizard.jpg")
wizard2Image=loadImage("thunder wizard.jpg")
fireImage=loadImage("fire.png")
thunderImage=loadImage("thunder.jpg")
destinyhealthImage=loadImage("healthbar.jpg")
enemyhealthImage=loadImage("healthbar2.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
 
  engine = Engine.create();
  world = engine.world;
  bg=createSprite(width/2,height/2)
  bg.addImage("background",backgroundImage)
  bg.velocityX=-1
  bg.x=bg.width/2
destinyhealth=createSprite(width-140,35)
destinyhealth.addImage("healthbar",destinyhealthImage)
destinyhealth.scale=0.6
  destiny=createSprite(width/8-20,height/2,50,50);
  destiny.addImage("shadow fighter",destinyImage)
  destiny.scale=0.59
  destiny.debug=false
  destiny.setCollider("rectangle",0,0,400,150)
  wizard1=createSprite(width-140,height/2,45,45)
  wizard1.addImage("firewizard",wizard1Image)
  wizard1.scale=0.1
  wizard1.debug=false
  wizard1.setCollider("rectangle",0,0,2400,1600)
wizard2=createSprite(width/2 -50,height/2,45,45)
wizard2.addImage("thunderwizard",wizard2Image)
wizard2.scale=0.18
wizard2.debug=false
wizard2.setCollider("rectangle",0,0,1200,900)
enemyhealth=createSprite(width-140,135)
enemyhealth.addImage("healthbar2",enemyhealthImage)
enemyhealth.scale=0.7

}

function draw() {
  background("black")  
  console.log(bg.x)
  if(bg.x<width/2){
bg.x=bg.width/2

  }
  Engine.update(engine);
// moving destiny with arrow keys
if(keyDown("right")){
  destiny.x=destiny.x+4
}
if(keyDown("left")){
  destiny.x=destiny.x-4
}
if(keyDown("up")){
  destiny.y=destiny.y-4
}
if(keyDown("down")){
  destiny.y=destiny.y+4
}
if(destiny.isTouching(wizard1)){
  fireAttack()
}
if(destiny.isTouching(wizard2)){
  thunderAttack()
}
  drawSprites();
}

function fireAttack(){
  if(frameCount % 60 === 0) {
    fire=createSprite(width-100,height/2-20,25,25)
    fire.addImage(fireImage)
    fire.scale=0.05
    fire.velocityX=-3
  }


   
 }
 
function thunderAttack(){
if(frameCount % 60 === 0){
thunder=createSprite(width/2,height/2-20,25,25)
thunder.addImage(thunderImage)
thunder.scale=0.2
thunder.velocityX=-2
}

}

