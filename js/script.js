// Alert
const alertBtn = document.getElementById('alert-btn');
const btt = document.getElementsByClassName('btt');
const alertBox =  document.getElementById('alert');
alertBtn.addEventListener('click', alertTrigger);

function alertTrigger(){
    alertBox.classList.remove('hide');
}

