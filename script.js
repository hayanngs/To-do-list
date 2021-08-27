var container_input = document.getElementById('container_input');

var input_text = document.getElementById('input_text');

input_text.addEventListener('focus', function() {
    container_input.classList.add("container_input_focus");
});

input_text.addEventListener('blur', function() {
    container_input.classList.remove("container_input_focus");
});

var container_itens = document.getElementById('container_itens');
var itens = [];
var input_btn = document.getElementById('input_btn');

input_btn.addEventListener('click', function() {
    var text = input_text.value;
    if (text.length > 0) {
        var item = document.createElement('span');
        item.classList.add("item");
        item.innerText = text;
        input_text.value = "";
        itens.push(item);
        container_itens.append(item);
        input_text.focus();
    }
    else {
        //alerta campo vazio
    }
});
