
$(document).ready(function(){

    var novaPosicaoEsquerda = 0, novaPosicaoTop = 18, novaMargemRodape = 0;
    var novasEtiquetas = '';

	var controladorDeEtiquetasCriadas = localStorage.getItem("contaPaginas"); // VAI SER VIA LOCAL STORAGE
	
    var etiquetasSegundaPaginaEmDiante = localStorage.getItem("segundaPaginaEmDiante");

	// ADICIONA MAIS ETIQUETAS
    $(document).on("click", "#botao-criar-mais-etiquetas",
    function adicionarMaisEtiquetasNaPagina (){

        novaPosicaoEsquerda = 0, novaPosicaoTop = 18, novaMargemRodape = 0;
	    
        for(var i=1; i<=16; i++){
            if(i===16){novaMargemRodape = 20;}
            novasEtiquetas = novasEtiquetasParaInserirNoHTML(++etiquetasSegundaPaginaEmDiante, novaPosicaoEsquerda, novaPosicaoTop, novaMargemRodape);
            if(i % 2 === 0){
                novaPosicaoEsquerda = 0;
                novaPosicaoTop = 18;   
            }else{
                novaPosicaoEsquerda = 390;
                novaPosicaoTop = -110;
            }    
            $("#conteudo").append(novasEtiquetas);
            localStorage.setItem("nome"+etiquetasSegundaPaginaEmDiante, document.getElementById("nome-"+etiquetasSegundaPaginaEmDiante).value);
		    localStorage.setItem("cpf"+etiquetasSegundaPaginaEmDiante, document.getElementById("cpf-"+etiquetasSegundaPaginaEmDiante).value);
            localStorage.setItem("dn"+etiquetasSegundaPaginaEmDiante, document.getElementById("dn-"+etiquetasSegundaPaginaEmDiante).value);

            
            //document.getElementById("nome-"+etiquetasSegundaPaginaEmDiante).value = localStorage.getItem("nome"+etiquetasSegundaPaginaEmDiante);
		    //document.getElementById("cpf-"+etiquetasSegundaPaginaEmDiante).value = localStorage.getItem("cpf"+etiquetasSegundaPaginaEmDiante);
            //document.getElementById("dn-"+etiquetasSegundaPaginaEmDiante).value = localStorage.getItem("dn"+etiquetasSegundaPaginaEmDiante);
             
        } // FIM DO FOR

        localStorage.setItem("segundaPaginaEmDiante", etiquetasSegundaPaginaEmDiante);

        localStorage.setItem("contaPaginas", ++controladorDeEtiquetasCriadas);    

    }); 

    function novasEtiquetasParaInserirNoHTML(indice, posicaoEsquerda, posicaoTop, margemRodape){

        return '<div class="etiqueta" id="retangulo-'+(indice)+'" style="margin-left: '+(posicaoEsquerda)+'px; margin-top:'+(posicaoTop)+'px; margin-bottom:'+(margemRodape)+'px; ">' +
                '<form>'+
                        '<div class="form-group row">'+
                            '<div class="col-2">'+
                                '<label class="col-sm-2 col-form-label col-form-label-sm" data-toggle="tooltip" data-placement="top" data-html="true" title="Nome completo do respons&#225;vel familiar <label style='+'color:yellow'+'>(Obrigat&#243;rio)</label>">'+
                                    'NOME:'+
                                '</label>'+
                            '</div>'+
                            '<div class="col" style="margin-left: -5px;">'+
                                '<input style="width:290px"  class="form-control form-control-sm nome" id="nome-'+(indice)+'" type="text" name="nome" maxlength="34">'+  
                            '</div>'+
                        '</div>'+

                        '<div class="form-group row">'+
                            '<div class="col-2">'+
                               '<label class="col-sm-2 col-form-label col-form-label-sm" data-toggle="tooltip" data-placement="top" data-html="true" title="CPF <br /> <small style='+'font-size:13px'+'>(Cadastro de Pessoa F&#237;sica)</small> <br /> do respons&#225;vel familiar">'+
                                     'CPF:'+
                                '</label>'+
                            '</div>'+
                            '<div class="col" style="margin-left: -20px;">'+
                                '<input class="form-control form-control-sm cpf" id="cpf-'+(indice)+'" type="text" name="aceitaNumeros" maxlength="14">'+     
                            '</div>'+
                        '</div>'+

                        '<div class="form-group row">'+
                            '<div class="col-2">'+
                                '<label class="col-sm-2 col-form-label col-form-label-sm" data-toggle="tooltip" data-placement="top" data-html="true" title="Data de Nascimento <label style='+'color:yellow;'+'> (Obrigat&#243;rio)</label>">'+
                                    'DN:'+
                                '</label>'+
                            '</div>'+
                            '<div class="col" style="margin-left: -23px;">'+
                                '<input class="form-control form-control-sm data-de-nascimento" id="dn-'+(indice)+'" type="text" name="aceitaNumeros" maxlength="10" >'+
                            '</div>'+
                        '</div>'+

                '</form>'+
                '</div>';
    }


});
