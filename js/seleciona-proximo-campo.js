
$(document).ready(function(){

	var controladorDePaginasJaCriadas = localStorage.getItem("contaPaginas");

	$(document).on("keypress", "input.cpf", 
    function pulaCampoCpfParaCampoDataDeNascimento(){
        if($(this).val().length === 13){
            var idCpf = $(this).attr("id").substring(0, 4); // Antes cpf-1  depois cpf-
            for(var i=1; i<=16*(controladorDePaginasJaCriadas); i++){  
                if( ($(this).attr("id")) === (idCpf + i.toString()) ){
                    $("#dn-"+i.toString()).focus().select();
                    break;
                }
            }
        }
    }); 


    $(document).on("keypress", "input.data-de-nascimento", 
    function pulaCampoDataDeNascimentoParaProximaEtiqueta(){
        if($(this).val().length === 9){
            var idDn = $(this).attr("id").substring(0, 3);
            for(var i=1; i<=16*(controladorDePaginasJaCriadas); i++){  
                if( ($(this).attr("id")) === (idDn + i.toString()) ){
                    var indice = parseInt(i); indice++;
                    $("#nome-"+indice.toString()).focus().select();
                    break;
                }
            }
        } 
    });

});




