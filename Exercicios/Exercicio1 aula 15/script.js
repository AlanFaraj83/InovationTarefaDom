function exibirMensagemErro() {
    const mensagem = document.createElement("p");

    mensagem.textContent = "Essa é uma mensagem padronizada de erro. Cuidado com o que está fazendo!!";


    document.body.appendChild(mensagem);
}
