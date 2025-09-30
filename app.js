function criarCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    let respostaEstaVisivel = false
    function viraCartao(){
        respostaEstaVisivel = !respostaEstaVisivel
    }
    let respostaEstaVisivel = true
    cartao.className = 'cartao'
    cartao.innerHTML = `
        <div class="cartao_conteudo">
            <h3>Conhecimento Gerais</h3>
            <div class="cartao_conteudo_pergunta">
                <p>Qual a montanha mais alta do mundo?</p>
            </div>
            <div class="cartao_conteudo_resposta">
                <p>Monte Everest</p>
            </div>
        </div>
    `
    container.appendChil(cartao)
}
