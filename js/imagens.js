
let imagemFundo;
let imagemAtor1;
let imagemCarro1;

let somColisao;
let somTrilha;
let somPonto;


function preload(){
  imagemFundo = loadImage("imagens/estrada.png");
  imagemAtor1 = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];

  
  somColisao = loadSound("sons/colidiu.mp3");
  somTrilha = loadSound("sons/trilha.mp3");
  somPonto = loadSound("sons/pontos.wav");
}