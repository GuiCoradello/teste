const selecionarInputs = document.querySelector('[data-selecionarInput]');
selecionarInputs.addEventListener('click',checarImputs)

const desmarcarInputs = document.querySelector('[data-desmarcarInput]');
desmarcarInputs.addEventListener('click',() => {
 for(let i= 0 ; i< inputs.length ; i++){
    if(inputs[i].checked){
        inputs[i].removeAttribute('checked', 'checked')
       }
 }
})

function checarImputs () {
    const inputs = document.querySelectorAll('[data-inputs]');
    for(let i = 0 ; i < inputs.length ;i++){
            inputs[i].setAttribute("checked", "checked") 
    }
}