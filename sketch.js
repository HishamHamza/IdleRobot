function setup() {
  createCanvas(400, 400);
}

function draw(){ 
  background(251,251,251);
  textSize(32);
  text('Press Y, B, space or R',20,30);
  
  rect(mouseX,150,100,150);
  
  line(mouseX+50,200,mouseX+50,100);
  strokeWeight(6);
  
  ellipse(mouseX+50,100,80);
  
  triangle(mouseX+50,50,mouseX,140,mouseX + 100,140);

  quad(mouseX,310,mouseX+100,310,mouseX+120,350,mouseX-20,350);
  line(mouseX+20,290,mouseX+20,310);
  line(mouseX+80,290,mouseX+80,310);
  
  var select = random(1,5);
  
  if(keyIsDown(82)){
    fill("red");
  }
  if(keyIsDown(66)){
    fill("blue");
  }
  if(keyIsDown(32)){
    fill("black");
  }
  if(keyIsDown(89)){
    fill("yellow");
  }
  
}