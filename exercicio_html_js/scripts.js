const formulario = document.querySelector("#formulario-analise");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const numeroA = Number(document.querySelector("#numero-a").value);
    const numeroB = Number(document.querySelector("#numero-b").value);
    
    // 

    if (numeroA >= numeroB) {
        alert("Erro");
    } else {
        alert("Valido" + nome + email);
    }
});