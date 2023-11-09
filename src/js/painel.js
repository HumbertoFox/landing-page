const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaVoltar = document.getElementById('btn-voltar');
const setaAvancar = document.getElementById('btn-avancar');

let imagemAtual = 0;

function esconderImagem() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
};

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
};

function mostarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    (naoEhAPrimeiraImagem) ? setaVoltar.classList.remove("opacidade") : setaVoltar.classList.add("opacidade");

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagensPainel.length - 1;
    (chegouNaUltimaImagem) ? setaAvancar.classList.add("opacidade") : setaAvancar.classList.remove("opacidade");
};

setaVoltar.addEventListener('click', function(){
    
    if (imagemAtual === 0) {
        return;
    };

    imagemAtual--;

    esconderImagem();

    mostrarImagem();

    mostarOuEsconderSetas();

});

setaAvancar.addEventListener('click', function(){
    
    const totalDeImagens = imagensPainel.length -1;
    
    if (imagemAtual === totalDeImagens) {
        return;
    };

    imagemAtual++;

    esconderImagem();

    mostrarImagem();

    mostarOuEsconderSetas();
});