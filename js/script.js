let buttonOne = document.getElementById('choose_button1');
let buttonTwo = document.getElementById('choose_button2');
let buttonThree = document.getElementById('choose_button3');
let numberCheck = document.getElementById('number');
let summaryPrice = document.getElementById('total');
let nameOf = document.getElementById('name');

let total = buttonOne.value * numberCheck.value;
summaryPrice.textContent = total;
nameOf.textContent = "#1";

buttonOne.onclick = function () {
    console.log(buttonOne.value * numberCheck.value);
    let total = buttonOne.value * numberCheck.value;
    summaryPrice.textContent = total;
    nameOf.textContent = "#1";
};

buttonTwo.onclick = function () {
    console.log(buttonTwo.value * numberCheck.value);
    let total = buttonTwo.value * numberCheck.value;
    summaryPrice.textContent = total;
    nameOf.textContent = "#2";
};

buttonThree.onclick = function () {
    console.log(buttonThree.value * numberCheck.value);
    let total = buttonThree.value * numberCheck.value;
    summaryPrice.textContent = total;
    nameOf.textContent = "#3";
};

numberCheck.onchange = function () {
    if (buttonOne.checked) {
        let total = buttonOne.value * this.value;
        summaryPrice.textContent = total;
    }
    else if (buttonTwo.checked) {
        let total = buttonTwo.value * this.value;
        summaryPrice.textContent = total;
    }
    else {
        let total = buttonThree.value * this.value;
        summaryPrice.textContent = total;
    }
}