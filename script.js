console.log("javascript carregado");

function validaCpf(cpf) {
    return false;
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