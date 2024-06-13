$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('form').validate({
        rules: ({
            nome: {
                required:true
            },
            email: {
                required:true,
                email:true
            },
            message: {
                required:true
            }
        }),
        messages: {
            nome: 'Por gentileza, insira seu nome',
            email: 'Por gentileza, insira um endereço de E-mail válido',
            message: 'Por gentileza, insira sua mensagem'
        }
    })
})