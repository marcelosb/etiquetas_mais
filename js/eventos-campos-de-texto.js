$(document).ready(function(){

	$(document).on("click", "input[name=aceitaNumeros]", 
    function selecionarCampo(){
        $(this).select();
    });

    var controladorDeEtiquetas = localStorage.getItem("contaPaginas");
    $(document).on("click", "input[name=nome]", 
    function selecionarCampo(){
        $(this).select();
        for(var i=1; i<=16*controladorDeEtiquetas; i++){ 
            localStorage.setItem("nome"+i, document.getElementById("nome-"+i).value);
            localStorage.setItem("cpf"+i, document.getElementById("cpf-"+i).value);
            localStorage.setItem("dn"+i, document.getElementById("dn-"+i).value);
        }
    });

// $("[name=aceitaNumeros]")
// $("[name=dn]")

 	$(document).on("blur", "input", 
    function removerBordaDeCampoPreenchidos(){
        if($(this).val().length > 0 ){
            $(this).css("border-bottom","none");
        }
    });

    $(document).on("mouseover", "input", 
    function adicionarBordaAoPassarOMouse(){
        $(this).css("border-bottom","1px solid #cccccc");
    });

    $(document).on("mouseleave", "input", 
    function removerBordaAoSairComOMouse(){
        if($(this).val().length > 0){
            $(this).css("border-bottom","none");
        }
    });



});
