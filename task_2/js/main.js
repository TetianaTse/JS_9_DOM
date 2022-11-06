'use strict';
let arrAnyWeb;
function enterCite() {
    let anyWeb = prompt('Enter the address of the site you want to go to:');
    arrAnyWeb = Array.from(anyWeb);
    return arrAnyWeb;
};

function checkHttp() {
    let arrCheck = [];
    const arrHttp = ['h','t','t','p',':','/','/'];
    const arrHttps = ['h','t','t','p','s',':','/','/'];
    for(let i = 0; i < 7; i++) {
        arrCheck.push(arrAnyWeb[i]);
    }

    for(let i = 0; i < arrCheck.length; i++) {
        if(arrCheck[i] === arrHttps[i] || arrCheck[i] === arrHttp[i]) {
            continue;
        } else {
            arrAnyWeb.unshift('h','t','t','p','s',':','/','/');
            break;
        }
    }
    return arrAnyWeb = arrAnyWeb.join("");
}

function enterAndCheck() {
    let arrAnyWeb = enterCite();
    checkHttp();
    const textLink =document.createElement('div');
    textLink.classList.add('link');
    textLink.textContent = arrAnyWeb.join("");
    const parent = document.getElementById('btn-block');
    parent.appendChild(textLink);
}