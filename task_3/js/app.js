document.getElementById("btn").addEventListener("click", changeImages); 

function changeImages() {
    const randomImg = Math.ceil(Math.random() * 9);
    document.querySelector('img').src = 'images/' + randomImg + '.jpg';
}
