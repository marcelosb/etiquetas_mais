
$(document).ready(function(){

	var modalMensagemDeBoasVindas = 
	'<!--MODAL DE MENSAGEM DE BOAS VINDAS-->'+
        '<!-- Modal -->'+
        '<div class="modal fade" id="boasVindas" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">'+
          '<div class="modal-dialog modal-dialog-centered" role="document">'+
            '<div class="modal-content">'+
              '<div class="modal-header">'+
                '<h5 class="modal-title" id="TituloModalCentralizado">Mensagem de boas vindas</h5>'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">'+
                  '<span aria-hidden="true">&times;</span>'+
                '</button>'+
              '</div>'+
              '<div class="modal-body">'+
                'Seja bem vindo, funcionário da Secretraria Municipal de Desenvolvimento Humano e Social (SEMDHS) da cidade de São Bento/PB!'+
              '</div>'+
              '<div class="modal-footer">'+
                '<button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';

	$("#conteudo").append(modalMensagemDeBoasVindas);
  $('#boasVindas').modal('show');  

});

