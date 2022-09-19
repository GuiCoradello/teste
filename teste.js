const inputs = document.querySelectorAll('[data-inputs]');
const selecionarInputs = document.querySelector('[data-selecionarInput]');
selecionarInputs.addEventListener('click',() => {
    for(let i = 0 ; i < inputs.length ;i++){
       checarImputs(inputs[i])

    }

})

const desmarcarInputs = document.querySelector('[data-desmarcarInput]');
desmarcarInputs.addEventListener('click',() => {
 for(let i= 0 ; i< inputs.length ; i++){
    if(inputs[i].checked){
        inputs[i].removeAttribute('checked', 'checked')
       }
 }
})

function checarImputs (input) {
    if(!input.hasAttribute("checked")){
        input.setAttribute("checked", "checked") 
    }else {
        input.removeAttribute('checked')
    }
}