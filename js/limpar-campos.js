
$(document).ready(function(){

	$(document).on("click", "#botao-limpar-campos", 
    	function limparCampos(){

    		var modalLimparCamposDoSistema = 
	        '<!--MODAL DE CONFIRMAÇÃO SAIR DO SISTEMA-->'+
	        '<!-- Modal -->'+
	        '<div data-backdrop="static" data-keyboard="false" class="modal fade" id="limparCamposDoSistema" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="false">'+
	          '<div class="modal-dialog modal-dialog-centered" role="document">'+
	            '<div class="modal-content">'+
	              '<div class="modal-header" style="background-color:#ea4335;">'+
	                '<h5 style="color:#ffffff;" class="modal-title" id="TituloModalCentralizado">Limpar todos os campos</h5>'+
	               '<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">'+
	                  '<span style="color:#ffffff;" aria-hidden="true">&times;</span>'+
	                '</button>'+
	              '</div>'+
	              '<div class="modal-body">'+
	                    'Deseja realmente limpar todos os campos?<br>'+
	                    'Observação: Ao limpar, todas as informações serão <label style="color:red">perdidas!</label>'+
	              '</div>'+
	              '<div class="modal-footer">'+
	                '<button style="background-color:#ea4335; border:1px solid #f5f5f5;" id="botao-limpar-todos-os-campos" type="button" class="btn btn-primary" data-dismiss="modal">Sim</button>'+
	                '<button type="button" class="btn btn-secundary" data-dismiss="modal">Não</button>'+
	              '</div>'+
	            '</div>'+
	          '</div>'+
	        '</div>';

	        $("#conteudo").append(modalLimparCamposDoSistema);
	        $('#limparCamposDoSistema').modal('show'); 


        	
	});

    $(document).on("click", "#botao-limpar-todos-os-campos", 
    function limpar(){
        $("input").val("");
    	$("input").css("border-bottom","1px solid #cccccc");
    	// Limpa todos os elementos
    	localStorage.clear();
    });

    
});




