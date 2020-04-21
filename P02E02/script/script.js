function getDivScroll() {
    return document.querySelector(".div-scroll");
}

function messageReiceved(objScroll, strTexto) {
    objScroll.innerHTML = objScroll.innerHTML + (
        `<div class='div-reiceved'> 
            <span class='span-reiceved'>
              ` + strTexto + `
            </span>
        </div>`);
}

function messageSend(objScroll, strTexto, typeAnswer) {
    objScroll.innerHTML = objScroll.innerHTML + (
        `<div class='div-send'> 
            <span class='span-send'>
              ` + strTexto + `
            </span>
        </div>`);

    messageAnswer(objScroll, typeAnswer)
}


function messageAnswer(objScroll, typeAnswer) {
    let objImg = document.querySelector(".div-header img");
    switch (typeAnswer) {
        case -1:
            messageReiceved(objScroll, "Olá! me chamo cara, prazer em conhece-lo!  <img src='img/imgWellcome.svg' width = '15px'>");
            objImg.src = "img/imgWellcome.svg";
            break;
        case 0:
            messageReiceved(objScroll, "E ai! <img src='img/imgHappy.svg' width = '15px'>");
            objImg.src = "img/imgHappy.svg";
            break;
        case 1:
            messageReiceved(objScroll, "Não Fode! <img src='img/imgSad.svg' width = '15px'>");
            objImg.src = "img/imgSad.svg";
            break;
        case 2:
            messageReiceved(objScroll, "Você também ein!  <img src='img/imgVeryHappy.svg' width = '15px'>");
            objImg.src = "img/imgVeryHappy.svg";
            break;

        default:
            break;
    }
    objScroll.scrollTop = objScroll.scrollHeight - objScroll.clientHeight;
}



function sendMessage(typeMessage, strTexto, typeAnswer) {
    let objScroll = getDivScroll();
    switch (typeMessage) {
        case "tmSend":
            messageSend(objScroll, strTexto, typeAnswer);
            break;
        case "tmReiceved":
            messageReiceved(objScroll, strTexto);
            break;

        default:
            break;
    }
}

function clearChat() {
    let objScroll = getDivScroll();
    objScroll.innerHTML = "";
    messageAnswer(objScroll, -1);


}