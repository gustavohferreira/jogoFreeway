function setup() {
  createCanvas(650, 400);
  somDaTrilha.loop();
  }

function draw() {
  background(imagemDaEstrada)
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  colisaoAtor();
  incluiPontos();
  marcaPonto();
  
}