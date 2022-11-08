'use strict';
document.getElementById("btn-1").addEventListener("click", enterAndCheck);
document.getElementById("btn-2").addEventListener("click", function() {
    if (anyWeb === undefined) {
        location.href = '#';
        message();
    } else {
        location.href = anyWeb;
    }
}); 
 


