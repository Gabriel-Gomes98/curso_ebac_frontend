// Criando a função para validar o nome
function validaNome(nomeEntrada) {
    const nome = document.querySelector("#nome").value;
    nomeCompleto = nome.split(" ");
    const mensagemAviso = "Nome invalido, Digite o nome completo.";
    const aviso = document.querySelector("#aviso");
    aviso.innerHTML = mensagemAviso;
    const botao = document.querySelector("#button-analise");
    
    if (nomeCompleto.length >= 2) {
        botao.disabled = false;
        aviso.style.display = "none";
    } else {
        botao.disabled = true;
        aviso.style.display = "block"
    }
}

// Adicionando um evento no campo do nome e validando o nome  
const nomeInput = document.querySelector("#nome");

nomeInput.addEventListener("input", function() {
    const nomeUsuario = nomeInput.value;
    validaNome(nomeUsuario);
});

// Adicionando um evento na tag <form>
const formulario = document.querySelector("#formulario-analise");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const mensagemId = document.querySelector("#mensagem-erro");
    const mensagemClass = document.querySelector(".mensagem-sucesso");
    const mensagemSucesso = "Validação aceita, o seu cadastro foi realizado com sucesso.";
    const mensagemErro = "ERRO na validação, tente outra vez.";
    const numeroA = Number(document.querySelector("#numero-a").value);
    const numeroB = Number(document.querySelector("#numero-b").value);
    
    // Analisando a validação do cadastro 
    if (numeroA >= numeroB) {
        mensagemId.innerHTML = mensagemErro
        mensagemId.style.display = "block"
        mensagemClass.style.display = "none";
    } else {
        mensagemClass.innerHTML = mensagemSucesso
        mensagemClass.style.display = "block";
        mensagemId.style.display = "none"

       // Limpar os campos de input após o sucesso
        nomeInput.value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#numero-a").value = "";
        document.querySelector("#numero-b").value = "";
    }
});