const butterfly = [];
let a = 0;
let x1,y1,r1,g,b;

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(random(150));
  //círculo
  r1= random(255);
  g= random(255);
  b= random(255);
  x1= random(width)
  y1= random (height)
  fill(r1,g,b,100);
  circle(x1,y1,7)
  
  
  //"mariposa"
  translate(width/2, height/2);
  rotate(frameCount / 50.0);

  stroke(255);
  strokeWeight(1);
  fill(random(225),random(255), random(255));
  beginShape();
  for (let v of butterfly) {
    vertex(v.x, v.y);
  }
  endShape();

  const r = height/8;
  const x = -r*cos(12*a)*2 ;
  const y = r*sin(8*a)*2;
  butterfly.push(createVector(x, y));
  
  // So that it stops
  if (a > TWO_PI) {
   //noLoop();
  }

  a += 0.25;
}

//Nombre del Proyecto: Visual para drop de concierto techno "Butterfly Curve"

//Video por Daniel Shiffman basado: https://youtu.be/oUBAi9xQ2X4
//Fórmula en la que se basó Daniel Shiffman: https://mathworld.wolfram.com/HeartCurve.html


//Fórmula en la que me basé para el proyecto: https://mathworld.wolfram.com/ButterflyCurve.html
//Cabe recalcar que no logré descifrar por completo la forma de uso, sin embargo se forma de manera
//relativa la mariposa.

//FORMA DE USO SUGERIDA: 1. Reproducir la canción en el segundo ya establecido: https://youtu.be/1Mr8Ke7hU5w?t=21 .
//                       2. Recargar o abrir la página del proyecto en el "drop".

//Realizado por: JOHN GUAMÁN


