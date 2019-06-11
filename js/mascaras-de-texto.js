$(document).ready(function(){


    $(document).on("keydown", "input.nome", 
        function formataCampoNome(event){
            var tecla = event.which || event.keyCode;
            var teclaEspecial = (",8,9,32,35,36,37,39,46,".indexOf(","+tecla+",") > -1);
            if((tecla >= 65 && tecla <= 90) || teclaEspecial ){
                return true;
            }
            return false;
    });

    $(document).on("keypress", "input.cpf", 
    function formataCampoCpf(){
        $("input.cpf").mask("000.000.000-00", {reverse: false});
    });

    $(document).on("keypress", "input.data-de-nascimento", 
    function formataDataDeNascimento(){
        $("input.data-de-nascimento").mask("00/00/0000", {placeholder: ""});
    });



});