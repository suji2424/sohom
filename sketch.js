var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 

var balls = [];
var plinkos = [];
var divisions = [];
var ball;
var ground;
var particles = [];
//var i = 0
//var plinkos = [];
//var divisions = [];
var divisionHeight = 300;
var score = 0;
var count = 0;
var gameState = "start";
//var arrowimg,arrow;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,790,500,20)
  for (var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2,5, divisionHeight))
  }
  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  
  for(var j = -5; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = -30; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }


 // arrow = createSprite(240,10,10,10)
 // arrow.addImage("Arrow",arrowimg)
 // arrow.scale = 0.2


 

}

function draw() {
  background(255); 
  textSize(20)
  text("score = " + score,80,20)
  text("500",5,550)
  text("250",85,550)
  text("100",170,550)
  text("100",250,550)
  text("250",330,550)
  text("500",410,550)
  Engine.update(engine);
  ground.display()
 // drawSprites();
  if(gameState == "end"){
    textSize(20)
    text("Game Over", 240,10)
  }
  for (var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }
  for (var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  for(var o = 0;o < particles.length; o++){
    particles[o].display();
  }
  if(ball!= null){
    ball.display()
  
if(ball.body.position.y > 760)
{
  if(ball.body.position.x < 360)
  {
    score = score+500
    ball = null
    if(count >= 5) gameState = "end"
  }
  else if(ball.body.position.x < 600 && ball.body.position.x > 301 ){
    score = score+500
    ball = null
    if(count >= 5) gameState = "end"
  }
  else if(ball.body.position.x < 900 && ball.body.position.x > 601 ){
    score = score+500
    ball = null
    if(count >= 5) gameState = "end"
  }
}

  }

  //for (var k = 0; k < divisions.length; k++) 
   //{
   //  divisions[k].display();
  // }
   if(frameCount%10===0){
    particles.push(new Particle(random(width/2-10,width/2+10,),10,10))
  }  
 
}  


//console.log(mouseX)
  //ground.display()
  //arrow.display()
  //drawSprites();


function mousePressed()
{
  if(gameState!=="end"){
    count++;
    ball = new Ball(mouseX,10,10,10)
  }
}