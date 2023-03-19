// Alert
const alertBtn = document.getElementById('alert-btn');
const btt = document.getElementsByClassName('btt');
const alertBox =  document.getElementById('alert');
alertBtn.addEventListener('click', alertTrigger);
btt.addEventListener('click', bttTrigger);

function alertTrigger(){
    alertBox.classList.remove('hide');
}

function bttTrigger(){
    btt.preventDefault();
}

