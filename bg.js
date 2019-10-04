const body = document.querySelector('body');

const IMG_NUMBER = 5;
function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number
}



function paintImg(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}

function init(){
    const randomNumber = getRandom();
    paintImg(randomNumber);
}

init();