'use strict';
let anyWeb;
function enterCite() {
    do {
        anyWeb = prompt('Enter the address of the site you want to go to:');
    } while (anyWeb === '' || anyWeb === null);
    return anyWeb;
};

function checkHttp() {
    if (anyWeb.indexOf('http://',0) !== -1 || anyWeb.indexOf('https://',0) !== -1) {
        return anyWeb;
    }
    anyWeb = 'https://' + anyWeb;
    return anyWeb;
}

function enterAndCheck() {
    enterCite();
    checkHttp();
    const textLink=document.createElement('div');
    textLink.classList.add('link');
    textLink.textContent = anyWeb;
    const parent = document.getElementById('btn-block');
    parent.appendChild(textLink);
}

function message() {
    const message=document.createElement('div');
    message.classList.add('message');
    message.innerHTML='First enter the website address!';
    const parent = document.getElementById('btn-block');
    parent.appendChild(message);
}