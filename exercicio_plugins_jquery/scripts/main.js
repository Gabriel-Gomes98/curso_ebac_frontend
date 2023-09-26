$(document).ready(function() {
    const telefoneInput = $('#telefone');
    telefoneInput.mask('(00) 00000-0000');

    const cpfInput = $('#cpf');
    cpfInput.mask('000.000.000-00');

    const cepInput = $('#cep');
    cepInput.mask('00000-000');
});