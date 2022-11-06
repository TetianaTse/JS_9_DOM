'use strict';
const inputElement = document.getElementById('text-field');
const hiddenElement = document.getElementById('popup-text');

inputElement.onfocus = function () {
    hiddenElement.classList.add('active');
};
inputElement.onblur = function() {
    hiddenElement.classList.remove('active');
}

