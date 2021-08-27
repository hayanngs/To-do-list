var container_input = document.getElementById('container_input');


function inputFocus() {
    container_input.classList.add("container_input_focus");
}

function inputBlur() {
    container_input.classList.remove("container_input_focus");
}