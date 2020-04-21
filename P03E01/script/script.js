function showMessage(texto, typeMessage) {
    switch (typeMessage) {
        case 0:
            document.querySelector(".div-alerta").style.backgroundColor = "#ff5252";
            document.querySelector(".div-alerta img").src = "img/alert.svg";
            break;
        case 1:
            document.querySelector(".div-alerta").style.backgroundColor = "#22ea78";
            document.querySelector(".div-alerta img").src = "img/check.svg";
            printResumo();
            break;

        default:
            break;
    }
    document.querySelector(".div-alerta span").innerHTML = texto;
    document.querySelector(".div-alerta").style.visibility = "visible";

}

function printResumo() {
    let nome = document.getElementById("iptNome").value;
    let telefone = document.getElementById("iptTelefone").value;
    let CPF = document.getElementById("iptCPF").value;
    let total = document.getElementById("iptTotalCompra").value;
    let descForma = "";
    let Formapagamento = document.querySelector("input[type=radio]:checked")
    switch (Formapagamento.value) {
        case "0":
            descForma = 'Dinheiro';
            break;
        case "1":
            descForma = 'Cartão de crédito';
            break;
        case "2":
            descForma = 'Cartão de débito';
            break;

        default:
            break;
    }
    let qtdeParc = document.getElementById("selQtdParcela").value;

    document.querySelector(".div-resumo pre").innerHTML =
        `=============================================
CLIENTE: ${nome} 
=============================================
CPF: ${ CPF}
=============================================
TELEFONE: ${telefone}
=============================================
TOTAL: ${total}
=============================================
FORMA DE PAGAMENTO: ${descForma}
=============================================
QUANTIDADE DE PARCELA: ${qtdeParc} 
=============================================`;

    document.querySelector(".div-resumo").style.visibility = "visible";
    document.querySelector("form").reset();
}

function save() {
    let Formapagamento = document.querySelector("input[type=radio]:checked")

    if (document.getElementById("iptNome").value == "") {
        showMessage("Preencha o nome do cliente.", 0);
    } else
    if (document.getElementById("iptTelefone").value == "") {
        showMessage("Preencha o telefone do cliente.", 0);
    } else
    if (document.getElementById("iptCPF").value == "") {
        showMessage("Preencha o cpf do cliente.", 0);
    } else
    if (document.getElementById("iptTotalCompra").value == "") {
        showMessage("Preencha o total da compra do cliente.", 0);
    } else
    if (Formapagamento == null) {
        showMessage("Preencha a forma de pagamento do cliente.", 0);
    } else
    if (document.getElementById("selQtdParcela").value == "0") {
        showMessage("Preencha a quantidade de parcela.", 0);
    } else {
        showMessage("Cadastro realizado com sucesso!.", 1);
        printResulmo();
    }
}


function cancel() {
    closeAlerta()
    document.querySelector("form").reset();
    document.querySelector(".div-resumo").style.visibility = "hidden";
}

function closeAlerta() {
    document.querySelector(".div-alerta").style.visibility = "hidden";

}