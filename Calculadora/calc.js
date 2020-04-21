var TOperator = { oNone: "", oPlus: "+", oSub: "-", oMult: "*", oDiv: "/", oIgual: "=", oClear: "C" };
var strValor1 = "";
var strValor2 = "";
var charOperator = "";
var strDisplay = "";
var strKey = "";
var Totalizador = "";
var strLast = "";

function BackString() {
    if (strValor2 != "") {
        strValor2 = strValor2.substring(0, (strValor2.length - 1));
        strDisplay = strValor2 != "" ? strValor2 : "0";
    } else
    if (strValor1 != "" && charOperator == "") {
        strValor1 = strValor1.substring(0, (strValor1.length - 1));
        strDisplay = strValor1 != "" ? strValor1 : "0";
    }
    return strDisplay;
}

function negativePositive() {
    if (strValor2 != "") {
        strValor2 = parseFloat(strValor2) * -1;
        strDisplay = strValor2 != "" ? strValor2 : "0";
    } else
    if (strValor1 != "") {
        strValor1 = parseFloat(strValor1) * -1;
        strDisplay = strValor1 != "" ? strValor1 : "0";
    }
    return strDisplay;
}

function validadeInsertPoint(eleMemoryCalc) {
    if (strValor2 != "") {
        return strValor2.indexOf(".") < 0;
    } else
    if (strValor1 != "" && charOperator == "") {
        return strValor1.indexOf(".") < 0;
    } else
        return eleMemoryCalc.value.indexOf(".") < 0;
}

function soma() {
    return parseFloat(strValor1) + parseFloat(strValor2);
}

function sub() {
    return parseFloat(strValor1) - parseFloat(strValor2);
}

function mult() {
    return parseFloat(strValor1) * parseFloat(strValor2);
}

function div() {
    return parseFloat(strValor1) / parseFloat(strValor2);
}

function raiz() {
    if (strValor2 != "") {
        strValor2 = Math.sqrt(strValor2);
        strDisplay = strValor2 != "" ? strValor2 : "0";
    } else
    if (strValor1 != "") {
        strValor1 = Math.sqrt(strValor1);
        strDisplay = strValor1 != "" ? strValor1 : "0";
    }
    strDisplay = strDisplay != "" ? strDisplay : "0";
    return strDisplay;

}

function Percente() {
    switch (charOperator) {
        case "+":
        case "-":
            strValor2 = parseFloat(parseFloat(strValor1) * (parseFloat(strValor2) / 100));
            return strValor2 = parseFloat(parseFloat(strValor1) * (parseFloat(strValor2) / 100));
        default:
            strValor2 = (parseFloat(strValor2) / 100);
            return strValor2;
    }
}

function resetCalculo() {
    if (strValor2 != "") {
        strValor2 = "";
        strDisplay = strValor2 != "" ? strValor2 : "0";
    } else if (strValor1 != "" && charOperator == "") {
        strValor1 = "";
        strDisplay = strValor1 != "" ? strValor1 : "0";
    }
    strDisplay = "0";
}

function SetRestartVariables() {
    strLast = "";
    Totalizador = "";
    strValor1 = strValor1 == "" ? "0" : strValor1;
    return;
}


function setValoresEntrada() {
    if (charOperator == "") {
        strValor1 += strKey;
        strDisplay = strValor1;
    } else {
        strValor2 += strKey;
        strDisplay = strValor2;
    }
}

function setToralizador(eleMemoryCalc) {
    Totalizador = "=";
    if (strValor2 == "") {
        strValor2 = strLast;
    }
    strDisplay = makeOperation(eleMemoryCalc);
}

function resetEntrada(eleMemoryCalc) {
    eleMemoryCalc.value = "";
    strValor1 = "";
    strValor2 = "";
    strDisplay = "0";
    charOperator = "";
}

function strToEntitie(AValue) {
    switch (AValue) {
        case "/":
            AValue = String.fromCharCode(247);
            break;
        case "*":
            AValue = String.fromCharCode(215);
            break;
        case "+":
            AValue = String.fromCharCode(43);
            break;
        case "-":
            AValue = String.fromCharCode(8722);
            break;

        default:
            break;
    }
    return AValue;
}

function replaceLastOper(eleMemoryCalc, strOper) {
    var strTemp = eleMemoryCalc.value;

    strOper = strToEntitie(strOper);
    if (strTemp[strTemp.length - 1] != "=" && strTemp[strTemp.length - 1] != strOper) {
        eleMemoryCalc.value = strTemp.substring(0, strTemp.length - 1) + strOper;
    }
}

function setOperador(eleMemoryCalc) {
    if (charOperator != "") {
        strDisplay = makeOperation(eleMemoryCalc);
        charOperator = strKey;
    } else {
        charOperator = strKey;
        setMemoryCalc(eleMemoryCalc);
    }

    charOperator = strKey;
    replaceLastOper(eleMemoryCalc, charOperator);
}



function makeOperation(eleMemoryCalc) {
    if (strValor2 != "") {
        setMemoryCalc(eleMemoryCalc);
        switch (charOperator) {
            case "+":
                strValor1 = soma();
                break;
            case "-":
                strValor1 = sub();
                break;
            case "*":
                strValor1 = mult();
                break;
            case "/":
                strValor1 = div();
                break;

        }
        strLast = strValor2;
    }
    strValor2 = "";
    return strValor1;
}

function validateKeyCode(AValue, eleMemoryCalc) {
    if (AValue == 13 || AValue.toUpperCase() == "ENTER" || AValue.toUpperCase() == "=") {
        strKey = "="
        return true;
    } else
    if (AValue.toUpperCase() == "BACKSPACE" || AValue.toUpperCase() == "B") {
        strKey = "B"
        return true;
    } else
    if (AValue == 67 || AValue.toUpperCase() == "CE") {
        strKey = "CE"
        return true;
    } else
    if (AValue == 27 || AValue.toUpperCase() == "ESCAPE" || AValue.toUpperCase() == "C") {
        strKey = "C";
        return true;
    } else
    if (AValue == 120 || AValue.toUpperCase() == "F9" || AValue.toUpperCase() == "I") {
        strKey = "I";
        return true;
    } else
    if (AValue == 53 || AValue.toUpperCase() == "%") {
        strKey = "%"
        return true;
    } else
    if (AValue == 86 || AValue.toUpperCase() == "V") {
        strKey = "V"
        return true;
    } else
    if (AValue == 106 || AValue.toUpperCase() == "*") {
        strKey = "*"
        return true;
    } else
    if (AValue == 107 || AValue.toUpperCase() == "+") {
        strKey = "+"
        return true;
    } else
    if (AValue == 109 || AValue.toUpperCase() == "-") {
        strKey = "-"
        return true;
    } else
    if (AValue == 111 || AValue.toUpperCase() == "/") {
        strKey = "/"
        return true;
    } else
    if (AValue == 194 || AValue.toUpperCase() == ".") {
        strKey = "."
        return validadeInsertPoint(eleMemoryCalc);
    } else
    if (parseInt(AValue) in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) {
        strKey = AValue;
        return true;
    }

}


function setMemoryCalc(eleMemoryCalc) {
    var
        strOper = "";
    strOper = (strKey == "=" ? charOperator : strKey);

    strOper = strToEntitie(strOper);

    if (eleMemoryCalc.value.indexOf("=") <= 0 && (strKey == "=" || Totalizador == "=")) {
        strOper = "=";
    }

    if (strValor2 != "" && strLast == "" && strOper == "=") {
        eleMemoryCalc.value += (strValor2 != "" ? strValor2 : "") + strOper;
    } else
    if (eleMemoryCalc.value.indexOf("=") <= 0) {
        if (strValor2 != "")
            eleMemoryCalc.value += (strValor2 != "" ? strValor2 : "") + strOper
        else
            eleMemoryCalc.value += (strValor1 != "" ? strValor1 : "") + strOper;
    } else
        eleMemoryCalc.value = (strValor1 != "" ? strValor1 : "") + strOper + strValor2 + (strKey == "=" ? "=" : strOper);

    replaceLastOper(eleMemoryCalc, strOper);
}

function setNumber(AValor, eleInput, eleMemoryCalc) {
    if (validateKeyCode(AValor, eleMemoryCalc)) {
        switch (strKey) {
            case "+":
            case "-":
            case "*":
            case "/":
                SetRestartVariables();
                setOperador(eleMemoryCalc);
                break;
            case "C":
                resetCalculo();
                break;
            case "CE":
                resetEntrada(eleMemoryCalc);
                break;
            case "I":
                strDisplay = negativePositive();
                break;
            case "%":
                strDisplay = Percente();
                break;
            case "V":
                strDisplay = raiz();
                break;
            case "=":
                setToralizador(eleMemoryCalc);
                break;
            case "B":
                strDisplay = BackString();
                break;
            default:
                setValoresEntrada();
                break;
        }
        eleInput.value = strDisplay
        return strDisplay;
    }
}