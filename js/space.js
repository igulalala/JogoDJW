const telaJogo = document.getElementById('telaJogo').getContext('2d')

const tiro = document.getElementById('somTiro')
const modal = document.getElementById('modal')
const mensagemModal = document.getElementById('mensagemModal')
const botaooContinuar = document.getElementById('botaoContinuar')
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