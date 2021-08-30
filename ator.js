//código do ator
let xAtor = 325;
let yAtor = 369;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 25, 25);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
        yAtor += 2;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
        xAtor -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 2;}
}

function colisaoAtor(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 20)
    if (colisao){
      posicaoInicial();
      somDaColisao.play();
    if (pontosMaiorQueZero()){
      meusPontos -= 1;
      }  
    } 
  }
}

function posicaoInicial(){
  yAtor = 369;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 250, 60))
  text(meusPontos, width / 6, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos +=1;
    somDoPonto.play();
    posicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yAtor < 369;
  }



