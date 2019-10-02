const form = document.querySelector('.js-form'),
input = form.querySelector('input'),
greetings = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
SHOWING_CN = 'showing';

function askForName(){
    form.classList.add(SHOWING_CN);
}


function paintGreetings(text){
    form.classList.remove(SHOWING_CN);
    getting.classList.add(SHOWING_CN);
    greetings.innerText = `Hello + ${text}`;
}

function localName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        //user is not
        askForName();
}else{
    // user is
    paintGreetings(currentUser);
}

function init(){
    
    localName();
}

init();