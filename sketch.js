function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(20,67,232)");
  fill("rgb(243,193,228)");
  circle(200, 200, 300); //rosto
  fill("#AFB9F3");
  circle(150, 150, 60); //olho esquerdo
  fill("rgb(181,181,254)");
  circle(250, 150, 60); //olho direito
  line(173, 258, 239, 265); //boca
  fill("#9310A9");
  triangle(200, 180, 170, 220, 220, 220); //nariz
  line(123, 115, 178, 113); //sombrancelha esquerda
  line(225, 116, 279, 106); //sombrancelha direita
  //circle(151,148,10); //pupila esquerda

  olhoX = map(mouseX, 0, 400, 132, 166);
  olhoY = map(mouseY, 0, 400, 133, 169);

  // circle(250,150,10); //pupila direita
  circle(olhoX + 100, olhoY, 10);

  circle(olhoX, olhoY, 10);
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
