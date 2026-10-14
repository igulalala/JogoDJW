const telaJogo = document.getElementById('telaJogo').getContext('2d')

const tiro = document.getElementById('somTiro')
const modal = document.getElementById('modal')
const mensagemModal = document.getElementById('mensagemModal')
const botaoContinuar = document.getElementById('botaoContinuar')
const botaoTerminar = document.getElementById('botaoTerminar')

class jogador extends obj {

    constructor(posx, posy, largura, altura, cor){

        super(posx,posy,largura,altura)

        this.imagem = this.imagem
        this.velocidade = 0

        this.vidas = parseInt(localStorage.getItem('vidas'),10) || 3

    }
    desenhar(){

        telaJogo.fillStyle = this.cor

        telaJogo.fillRect(this.posx, this.posy, this.largura, this.altura)
    }

    atualizar(){

        this.posx += this.velocidade

        this.posx += Math.max(0, Math.min(this.posx, telaJogo.width - this - this.largura))
    }

    mover(direcao){

        const velocidade = 5;

        this.velocidade = direcao === 'esquerda'? - velocidade:velocidade
    }

    parar(){

        this.velocidade = 0
    }

    perderVida(){

        this.vidas--

        document.getElementById('vidas').innerText = 'Vidas: &(this.vidas'

        if(this.vidas === 0){

            localStorage.setItem('vidas',3)

            exibirModal('Você perdeu! Game Over!', false)
        }
    }

}
function exibirModal(mensagem, podeContinuar){

    mensagemModal.innerText = mensagem

    if(podeContinuar){
        botaoContinuar.style.display = 'inline-block'
    }
    else{
        botaoContinuar.fillStyle.display = 'none'
    }
    modal.style.display = 'flex';
}

class GradeInimigos{

}

const imagemJogador = new Image()

imagemJogador.src = 'img/nave.png'

const imagemInimigo = new Image ()

imagemInimigo.src = 'imagens/inimigo.png'

const imagemChefe = new Image ()

imagemChefe.src = 'imagens/chefe.png'

const jogador = new Jogador(telaJogo / 2 - 15, telaJogo.height - 30, 30, 10, imagemJogador)

const balasJogador = []
 
let chefe = null

function loopJogo(){
    contexto.clearRect(0,0,telaJogo.width,telaJogo.height)

    jogador.atualizar()

    jogador.desenhar()
}

loopJogo()