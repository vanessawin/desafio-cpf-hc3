console.log("javascript carregado");

function validaCpf(cpf) {
    console.log(cpf.length);
    if (cpf.length != 11) {
        return false;
    } else {
        var numeros = cpf.substring(0, 9);
        var digitos = cpf.substring(9);
        // console.log("Numeros do cpf " + numeros);
        // console.log("Digitos do cpf " + digitos);

        var soma = 0
        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);

        var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        //validaçao do meu primeiro digito
        if (resultado != digitos.charAt(0)) {
            return false
        }
        // console.log(digitos.toString().charAt(0) + " é a primeira posição da variavel soma")
        return true
    }
}

function validacao() {
    console.log("Iniciando validação CPF");

    var cpf = document.getElementById("cpf_digitado").value

    var resultadoValicacao = validaCpf(cpf);

    if (resultadoValicacao) {
        document.getElementById("success").style.display = "block";
    } else {
        document.getElementById("error").style.display = "block";
    }

}