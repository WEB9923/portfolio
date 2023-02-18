const burger = document.getElementById('burger');
const ul = document.querySelector('.nav-inner .ul')
burger.addEventListener('click',() => {
    ul.classList.toggle('active')
});

const darkmodeBtn = document.getElementById('dark-mode-btn');
const documentBody = document.body;
const darkmodeIcon = document.querySelector('.icon i');

darkmodeBtn.addEventListener('click', darkMode);
function darkMode() {
    documentBody.classList.toggle('darkmode');
    documentBody.classList.contains('darkmode')
        ? darkmodeIcon.classList.replace('bi-moon','bi-brightness-high')
        : darkmodeIcon.classList.replace('bi-brightness-high','bi-moon')

    localStorage.darkmode = documentBody.classList.contains('darkmode')
        ? 1 : 0
}
if(localStorage.darkmode && Number(localStorage.darkmode)){
    darkMode();
}


///// NAME TYPING ANIMATION
const name = document.querySelector('.name');
let nameTxt = name.textContent;
let splitNameTxt = nameTxt.split('');
name.textContent = '';

for (let i = 0; i < splitNameTxt.length; i++) {
    name.innerHTML += '<span>' + splitNameTxt[i] + '</span>'
}
let char = 0;
let timer = setInterval(animation,250);
function animation() {
    const span = name.querySelectorAll('span')[char];
    span.classList.add('animate');
    char++;
    if(char === splitNameTxt.length){
        completeAnimation();
        return false;
    }
}
function completeAnimation() {
    clearInterval(timer);
    timer = null;
}

