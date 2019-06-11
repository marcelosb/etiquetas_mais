
$(document).ready(function(){ 
       
    var primeiraPagina = 1, margemRodape = 0, posicaoEsquerda = 0, posicaoTop = 18;
    var primeirasEtiquetas = '';

    if(localStorage.getItem("contaPaginas")){
        var contadorDePaginas = localStorage.getItem("contaPaginas");
       
        for(var i=1; i<=16*contadorDePaginas; i++){			
            if (i === 16*contadorDePaginas) {margemRodape = 20;}
            primeirasEtiquetas = etiquetasParaInserirNoHTML(i, posicaoEsquerda, posicaoTop, margemRodape);
            if(i % 2 === 0){
                posicaoEsquerda = 0;
                posicaoTop = 18;
            }else{
                posicaoEsquerda = 390;
                posicaoTop = -110;
            }

            $("#conteudo").append(primeirasEtiquetas);

            //localStorage.setItem("nome"+i, document.getElementById("nome-"+i).value);
		    //localStorage.setItem("cpf"+i, document.getElementById("cpf-"+i).value);
            //localStorage.setItem("dn"+i, document.getElementById("dn-"+i).value);

            document.getElementById("nome-"+i).value = localStorage.getItem("nome"+i);
		    document.getElementById("cpf-"+i).value = localStorage.getItem("cpf"+i);
            document.getElementById("dn-"+i).value = localStorage.getItem("dn"+i);

            if(document.getElementById("nome-"+i).value.length > 0){
                $("#nome-"+i).css("border-bottom","none");
            }if(document.getElementById("cpf-"+i).value.length > 0){
                $("#cpf-"+i).css("border-bottom","none");
            }if(document.getElementById("dn-"+i).value.length > 0){
                $("#dn-"+i).css("border-bottom","none");
            }

        }
        
    }else{
        
        for(var i=1; i<=16; i++){			
            if (i === 16) {margemRodape = 20;}
            primeirasEtiquetas = etiquetasParaInserirNoHTML(i, posicaoEsquerda, posicaoTop, margemRodape);
            if(i % 2 === 0){
                posicaoEsquerda = 0;
                posicaoTop = 18;
            }else{
                posicaoEsquerda = 390;
                posicaoTop = -110;
            }
            $("#conteudo").append(primeirasEtiquetas);
            localStorage.setItem("nome"+i, document.getElementById("nome-"+i).value);
		    localStorage.setItem("cpf"+i, document.getElementById("cpf-"+i).value);
            localStorage.setItem("dn"+i, document.getElementById("dn-"+i).value);

            //document.getElementById("nome-"+i).value = localStorage.getItem("nome"+i);
		    //document.getElementById("cpf-"+i).value = localStorage.getItem("cpf"+i);
            //document.getElementById("dn-"+i).value = localStorage.getItem("dn"+i);
        }
        localStorage.setItem("contaPaginas", 1);

        localStorage.setItem("segundaPaginaEmDiante", 16);

    }
    

    function etiquetasParaInserirNoHTML(indice, posicaoEsquerda, posicaoTop, margemRodape){

        return '<div class="etiqueta" id="retangulo-'+(indice)+'" style="margin-left: '+(posicaoEsquerda)+'px; margin-top:'+(posicaoTop)+'px; margin-bottom:'+(margemRodape)+'px; ">' +
                    '<form>'+
                        '<div class="form-group row">'+
                            '<div class="col-2">'+
                                '<label class="col-sm-2 col-form-label col-form-label-sm" data-toggle="tooltip" data-placement="top" data-html="true" title="Nome completo do respons&#225;vel familiar <label style='+'color:yellow'+'>(Obrigat&#243;rio)</label>">'+
                                    'NOME:'+
                                '</label>'+
                            '</div>'+
                            '<div class="col" style="margin-left: -5px;">'+
                                '<input style="width:290px"  class="form-control form-control-sm nome" id="nome-'+(indice)+'" type="text" name="nome" maxlength="32">'+  
                            '</div>'+
                        '</div>'+

                        '<div class="form-group row">'+
                            '<div class="col-2">'+
                               '<label class="col-sm-2 col-form-label col-form-label-sm" data-toggle="tooltip" data-placement="top" data-html="true" title="CPF <br /> <small style='+'font-size:13px'+'>(Cadastro de Pessoa F&#237;sica)</small> <br /> do respons&#225;vel familiar">'+
                                     'CPF:'+
                                '</label>'+
                            '</div>'+
                            '<div class="col" style="margin-left: -15px;">'+
                                '<input class="form-control form-control-sm cpf" id="cpf-'+(indice)+'" type="text" name="aceitaNumeros" maxlength="14" placeholder="">'+     
                            '</div>'+
                        '</div>'+

                        '<div class="form-group row">'+
                            '<div class="col-2">'+
                                '<label class="col-sm-2 col-form-label col-form-label-sm" data-toggle="tooltip" data-placement="top" data-html="true" title="Data de Nascimento <label style='+'color:yellow;'+'> (Obrigat&#243;rio)</label>">'+
                                    'DN:'+
                                '</label>'+
                            '</div>'+
                            '<div class="col" style="margin-left: -23px;">'+
                                '<input class="form-control form-control-sm data-de-nascimento" id="dn-'+(indice)+'" type="text" name="aceitaNumeros" maxlength="10" placeholder="">'+
                            '</div>'+
                        '</div>'+
                    '</form>'+
                '</div>';
    }


});

