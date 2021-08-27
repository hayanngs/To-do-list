var container_input = document.getElementById('container_input');
var input_text = document.getElementById('input_text');
input_text.addEventListener('focus', inputFocus);
input_text.addEventListener('blur', inputBlur);

var input_btn = document.getElementById('input_btn');
input_btn.addEventListener('click', inputBtnClick);

var container_itens = document.getElementById('container_itens');
var itens = [];

function inputFocus() {
    container_input.classList.add("container_input_focus");
}

function inputBlur() {
    container_input.classList.remove("container_input_focus");
}

function inputBtnClick() {
    var item = document.createElement('span');
    item.classList.add("item");
    item.innerText = input_text.value;
    itens.push(item);
    container_itens.append(item);
}