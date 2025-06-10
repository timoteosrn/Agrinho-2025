function setup() {
  createCanvas(800, 600);
  noLoop();
}

function draw() {
  background(135, 206, 235); // Cor de fundo azul (céu)

  // Desenhando o campo (grande área verde)
  fill(34, 139, 34);
  noStroke();
  rect(0, height - 100, width, 100);

  // Desenhando algumas casas
  drawHouse(200, height - 150);
  drawHouse(400, height - 200);
  drawHouse(600, height - 150);

  // Desenhando árvores
  drawTree(150, height - 180);
  drawTree(500, height - 250);
  drawTree(700, height - 180);
}

// Função para desenhar uma casa
function drawHouse(x, y) {
  fill(255, 0, 0); // Cor da casa (vermelha)
  rect(x, y, 80, 80); // Corpo da casa
  fill(139, 69, 19); // Cor do telhado (marrom)
  triangle(x, y, x + 80, y, x + 40, y - 40); // Telhado
}

// Função para desenhar uma árvore
function drawTree(x, y) {
  fill(139, 69, 19); // Tronco da árvore (marrom)
  rect(x - 10, y, 20, 40); // Tronco

  fill(0, 255, 0); // Folhagem (verde)
  ellipse(x, y - 20, 60, 60); // Parte superior da árvore
}