$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $('<li></li>');

        novaTarefa.text(nomeTarefa);
        novaTarefa.appendTo('#lista-de-tarefas');

        $('#nome-tarefa').val('');

        $('#lista-de-tarefas li').click(function() {
            $(this).css('text-decoration', 'line-through');
        });
    });
});

