
$(document).ready(function(){

	// FUNCAO PARA ABRIR MODAL SAIR DA PÁGINA
    $(document).on("click", "#botao-sair", 
    function sairDoSistema(){

        var modalSairDoSistema = 
        '<!--MODAL DE CONFIRMAÇÃO SAIR DO SISTEMA-->'+
        '<!-- Modal -->'+
        '<div data-backdrop="static" data-keyboard="false" class="modal fade" id="sairDoSistemaEtiquetas" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">'+
          '<div class="modal-dialog modal-dialog-centered" role="document">'+
            '<div class="modal-content">'+
              '<div class="modal-header">'+
                '<h5 class="modal-title" id="TituloModalCentralizado">Mensagem de confirmação</h5>'+
               '<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">'+
                  '<span aria-hidden="true">&times;</span>'+
                '</button>'+
              '</div>'+
              '<div class="modal-body">'+
                    'Deseja realmente sair do sistema de criação de etiquetas?<br>'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button id="botao-voltar-para-tela-de-login" type="button" class="btn btn-primary" data-dismiss="modal">Sim</button>'+
                '<button type="button" class="btn btn-secundary" data-dismiss="modal">Não</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';

        $("#conteudo").append(modalSairDoSistema);

        $('#sairDoSistemaEtiquetas').modal('show'); 
       
    });

    var verdadeiro = false;
    $(document).on("click", "#botao-voltar-para-tela-de-login", 
    function voltarTelaInicial(){
        verdadeiro = true;    
        window.location.href = "index.html" ; return false;
    });

     // JAVASCRIPT PURO - TENTAR  FECHAR A PÁGINA OU O NAVEGADOR
    window.addEventListener('beforeunload', (event) => {

        if(verdadeiro === false){
            // Cancel the event as stated by the standard.
            event.preventDefault();
            // Chrome requires returnValue to be set.
            event.returnValue = '';
            return '';
        }
        return '';
        
    });

});

