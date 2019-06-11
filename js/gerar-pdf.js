
$(document).ready(function(){

    // FUNÇÃO PARA GERAR PDF ETIQUETAS
	$(document).on("click", "#botao-imprimir", 
    function imprimirEtiquetas(){
		
        var listaDeEtiquetas = [];
        var item = {};
        var controladorDePaginasCriadas = localStorage.getItem("contaPaginas"); 

        for(var i=1; i<=16*controladorDePaginasCriadas; i++){
            if( ($("#nome-"+i.toString()).val() !== "") && ($("#dn-"+i.toString()).val() !== "") ){
                
                item = {};
                item["nome"] = $("#nome-"+i.toString()).val().toUpperCase();
                item["cpf"] = $("#cpf-"+i.toString()).val().toUpperCase();
                item["dataNascimento"] = $("#dn-"+i.toString()).val().toUpperCase();

                listaDeEtiquetas.push(item);
            }
        }

        if(listaDeEtiquetas.length === 0){
            var modalVazio = 
            '<!--MODAL VAZIO-->'+
            '<!-- Modal -->'+
            '<div class="modal fade " id="etiquetasEmBranco" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">'+
              '<div class="modal-dialog modal-dialog-centered modal-lg" role="document">'+
                '<div class="modal-content">'+
                  '<div class="modal-header">'+
                    '<h5 class="modal-title" id="TituloModalCentralizado">Página em branco ou campos incorretos</h5>'+
                   '<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">'+
                      '<span aria-hidden="true">&times;</span>'+
                    '</button>'+
                  '</div>'+
                  '<div class="modal-body">'+
                        
                        '<img src="img/warning.svg" width="50" height="50" alt="advertencia" style="float: left; margin:10px;">'+
                        'Documento vazio ou nenhuma etiqueta foi preenchida corretamente!<br>'+
                        'Para que seja gerado o documento em PDF, é necessário o preenchimento correto das etiquetas<br>'+
                        'É necessário informar os campos obrigatórios: <strong>nome</strong> e <strong>data de nascimento.</strong><br>'+
                  '</div>'+
                  '<div class="modal-footer">'+
                    '<button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>';

            $("#conteudo").append(modalVazio);

            $('#etiquetasEmBranco').modal('show'); 
            
        }else{
            var doc = new jsPDF();

            // deu certo
            doc.addFont('CourierNew', 'Comic', 'normal');
            doc.setFont('Comic');

            //doc.addFont('LucidaSansTypeWriterRegular', 'Lucida Sans', 'normal');
            //doc.setFont('Lucida Sans');
            


            //doc.setFont("lucida");
            //doc.setFontStyle("normal");
            doc.setFontSize(10);
            // Black sqaure with rounded corners
            doc.setDrawColor(0);
            //doc.setFillColor(255, 255, 255);

            var posEsq = 6.5, posDir = 108.5;
            var mudaAltura = 8;
            var posicaoTextoEsquerdaColunaUm = 10, posicaoTextoEsquerdaColunaDois = 112;
            var posicaoTextoTopo = 15;

            var verdade = true;
            var contador = 1;
            var indiceContador = 1;
            var manipulador = [];

            var totalDeNovasEtiquetas = listaDeEtiquetas.length-16;
            var totalDeNovasPaginas = Math.ceil(totalDeNovasEtiquetas/16);

            for (indice in listaDeEtiquetas) {

                if(listaDeEtiquetas.hasOwnProperty(indice)) {
                    // caso seja mais de uma página
                        if(totalDeNovasEtiquetas > 0){
                            if(verdade === true){
                                for(var k=1; k<=totalDeNovasPaginas; k++){
                                    for(var l=0; l<17; l++){
                                        manipulador[l] = (k*16)+1;
                                        //manipulador.push((k*16)+1);
                                    }
                                }
                                verdade = false;
                            }
                            if (indiceContador === manipulador[indiceContador-1]) {  
                                doc.addPage();
                                mudaAltura = 8; posicaoTextoTopo = 15;
                            }
                        }

                        indiceContador++; 
                    
                        if(contador%2 === 0){
                            doc.setFillColor(255, 255, 255);
                            doc.roundedRect(posDir, mudaAltura, 95, 30, 2, 2, 'FD');
                            mudaAltura = mudaAltura + 35;

                            doc.text(posicaoTextoEsquerdaColunaDois, posicaoTextoTopo, "NOME: "+ listaDeEtiquetas[indice].nome );
                            doc.text(posicaoTextoEsquerdaColunaDois, posicaoTextoTopo+9, "CPF: " + listaDeEtiquetas[indice].cpf   ); // ADICIONA 9
                            doc.text(posicaoTextoEsquerdaColunaDois, posicaoTextoTopo+9+9, "DN: " + listaDeEtiquetas[indice].dataNascimento ); // DIFERENCA DE 9
                            posicaoTextoTopo = posicaoTextoTopo + 35;
                        }else{
                            doc.setFillColor(255, 255, 255);
                            doc.roundedRect(posEsq, mudaAltura, 95, 30, 2, 2, 'FD');
                            doc.text(posicaoTextoEsquerdaColunaUm, posicaoTextoTopo, "NOME: "+ listaDeEtiquetas[indice].nome );
                            doc.text(posicaoTextoEsquerdaColunaUm, posicaoTextoTopo+9, "CPF: " + listaDeEtiquetas[indice].cpf  ); // ADICIONA 9
                            doc.text(posicaoTextoEsquerdaColunaUm, posicaoTextoTopo+9+9, "DN: " + listaDeEtiquetas[indice].dataNascimento ); // DIFERENCA DE 9  
                        }
                        contador++; 


                } // fim do IF SE TEM INDICE

            } // FIM DO FOR

            // Output as Data URI
            doc.output('dataurlnewwindow');

            window.scroll(0, 0);
            $("#nome-1").select();
        }   

    });

});




